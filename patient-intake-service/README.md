# Downloader Service

## Setup
1. Set Up Pub/Sub Notifications on Google Cloud
   1. Go to `Pub/Sub > Topics`
   2. Create a Topic
        - Name the Topic
        - Select "Add a default subscription"
        - Google-Managed encryption key
2. Enable Notifications on Your Storage Bucket
   1. Create a notification with `gsutil notification create -t your-pubsub-topic -f json -e OBJECT_FINALIZE gs://your-bucket-name`
   2. Confirm with `gsutil notification list gs://your-bucket-name`
3. Create Service Account
   1. Go to `IAM & Admin > Service Accounts`
   2. Create Service Account
        - Name the Service Account
        - Give it a description
        - Give it the following permissions: Storage Object Viewer, Pub/Sub Subscriber
   3. Create a JSON Keyfile and download it to the `patient-intake-service` directory as `google.json`.
4. Setup Python
   1. Install requirements with `pip install -r requirements.txt` (For google-cloud-storage, google-cloud-pubsub, pywin32, python-dotenv)
   2. Populate `.env` file:
    ```
        GOOGLE_APPLICATION_CREDENTIALS="path/to/json/file.json"
        GOOGLE_CLOUD_PROJECT_ID="you-project-id"
        GOOGLE_CLOUD_SUBSCRIPTION_NAME = "your-pubsub-subscription"
    ```

## Running and Deploying the Downloader Service
### Running the downloader script directly for Testing
Use this command to run the downloader script directly on your local machine: `python service.py`

### Installing the downloader script as a services
Use this command to run the downloader script directly on your local machine: `python service.py install`

### Running the downloader script service
Use this command to run the downloader script directly on your local machine: `python service.py install`
