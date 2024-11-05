import os
import sys
import json
import pytz 
from datetime import datetime
from google.cloud import storage, pubsub_v1
from google.cloud.pubsub_v1.subscriber import exceptions as sub_exceptions
from dotenv import load_dotenv
import servicemanager
import win32serviceutil
import win32service
import win32event

local_timezone = pytz.timezone("America/New_York")

class MyService(win32serviceutil.ServiceFramework):
    _svc_name_ = "PatientIntakeDownloaderService"
    _svc_display_name_ = "Patient Intake Downloader Service"
    _svc_description_ = "A Windows Service to listen to Google Cloud Pub/Sub and download files."

    def __init__(self, args):
        win32serviceutil.ServiceFramework.__init__(self, args)
        self.hWaitStop = win32event.CreateEvent(None, 0, 0, None)
        self.running = True

    def SvcStop(self):
        self.running = False
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        win32event.SetEvent(self.hWaitStop)

    def SvcDoRun(self):
        # Start the main logic of the script
        run_pubsub_listener()

def download_file(bucket_name, blob_name, upload_date, base_folder, storage_client):
    date_folder = os.path.join(base_folder, upload_date)
    os.makedirs(date_folder, exist_ok=True)
    
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    destination_path = os.path.join(date_folder, os.path.basename(blob_name))
    blob.download_to_filename(destination_path)
    servicemanager.LogInfoMsg(f"Downloaded {blob_name} to {destination_path}")

def sync_local_with_bucket(bucket_name, base_folder, storage_client):
    """
    Sync the local folder with the bucket to ensure no files in the bucket are missed.
    Only files that are not already in the local directory will be downloaded.
    """
    bucket = storage_client.bucket(bucket_name)
    blobs = bucket.list_blobs()

    for blob in blobs:
        # Determine the destination folder and path based on the blob's upload date
        blob_date = blob.time_created.astimezone(local_timezone).strftime('%Y-%m-%d')
        date_folder = os.path.join(base_folder, blob_date)
        local_file_path = os.path.join(date_folder, os.path.basename(blob.name))

        # Download the file only if it does not exist in the local directory
        if not os.path.exists(local_file_path):
            os.makedirs(date_folder, exist_ok=True)
            blob.download_to_filename(local_file_path)
            print(f"Synced missing file from bucket: {blob.name} to {local_file_path}")
    

def callback(message, base_folder, storage_client):
    try:
        print("Received message:", message)
        data = json.loads(message.data)
        bucket_name = data["bucket"]
        blob_name = data["name"]
        
        print(data)
        if blob_name.endswith(".pdf"):
            
            upload_date = datetime.now(local_timezone).strftime('%Y-%m-%d')
            download_file(bucket_name, blob_name, upload_date, base_folder, storage_client)
        
        message.ack()
    except Exception as e:
        print(f"Failed to process message: {e}")
        message.nack()

def run_pubsub_listener():
    load_dotenv() 
    credentials_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    PROJECT_ID = os.getenv("GOOGLE_CLOUD_PROJECT_ID")
    SUBSCRIPTION_NAME = os.getenv("GOOGLE_CLOUD_SUBSCRIPTION_NAME")
    BUCKET_NAME = os.getenv("GOOGLE_CLOUD_BUCKET_NAME")

    # Define the download folder on Desktop/New-Patients
    BASE_DOWNLOAD_FOLDER = os.path.join(os.path.expanduser("~"), "Desktop", "New-Patients")
    os.makedirs(BASE_DOWNLOAD_FOLDER, exist_ok=True)

    # Initialize Google Cloud clients
    storage_client = storage.Client()
    subscriber = pubsub_v1.SubscriberClient()
    subscription_path = subscriber.subscription_path(PROJECT_ID, SUBSCRIPTION_NAME)
    
    sync_local_with_bucket(BUCKET_NAME, BASE_DOWNLOAD_FOLDER, storage_client)

    # Modified callback function to accept parameters
    def pubsub_callback(message):
        callback(message, BASE_DOWNLOAD_FOLDER, storage_client)

    future = subscriber.subscribe(subscription_path, callback=pubsub_callback)
    print(f"Listening for messages on {subscription_path}...")

    try:
        future.result()  # Wait indefinitely for messages
    except KeyboardInterrupt:
        future.cancel()
        subscriber.close()
        print("Listener stopped manually.")
    except Exception as e:
        print(f"Error listening to Pub/Sub: {e}")
        future.cancel()

if __name__ == "__main__":
    # Check if a service-related command (e.g., install, start, stop) is given
    if len(sys.argv) > 1 and sys.argv[1] in ['install', 'remove', 'start', 'stop', 'restart']:
        # Run as a Windows Service
        win32serviceutil.HandleCommandLine(MyService)
    else:
        # Run as a standalone script
        print("Running as standalone script...")
        run_pubsub_listener()
