# Backend

## Setup
1. Set up a Firebase Project.
   1. Name the project
   2. Follow standard form
2. Go to the Google Cloud Project associated with this firebase project
3. Set up a Cloud Storage Bucket on Google Cloud
   1. Go to `Cloud Storage > Buckets`
   2. Create a Bucket
        - Name the Bucket
        - Set Bucket location to a Canadian Server (`northamerica-northeast-1`)
4. Create Service Account
   1. Go to `IAM & Admin > Service Accounts`
   2. Create Service Account
        - Name the Service Account
        - Give it a description
        - Give it the following permissions: Cloud Functions Invoker, Firebase Admin, Storage Object Creator, Storage Object Viewer, Logs Writer
   3. Create a JSON Keyfile and download it to the `patient-intake-backend` directory as `google.json`.
5. Setup Firebase
   1. `npm install -g firebase-tools`
   2. `firebase init functions`
   3. Choose Javascript
   4. Install Dependencies
   5. Set env variables manually with the following commands:
      - `firebase functions:config:set google.credentials="google.json"`
      - `firebase functions:config:set app.storage_bucket="smilinepatientforms.appspot.com"`

6. Setup Node Project
   1. Install script-specific dependencies with the following: `npm install pdfkit dotenv sharp`

## Testing and Deploying the Backend
### Running the Emulator for Testing
Use this command to start an emulator on your local machine: `firebase emulators:start --only functions`
   
### Testing the Backend Endpoint -- DOES NOT WORK AFTER SWITCHING TO CALLABLEFUNCTIONS
Using Postman, send a POST request to `http://localhost:5001/projectname/us-central1/functionname`, with a JSON payload of sample information.

These are the payload fields:
```
{
    "firstName", "middleName", "lastName", "dob", "healthCard", "email", "mobilePhone", "homePhone", "address", "city", "province", "postalCode", "parentFirstName", "parentLastName", "parentPhone", "emergName", "emergRelationship", "emergPhone", "doctorName", "doctorClinic", "doctorPhone", "isCovered", "nameOfInsured1", "birthdateOfInsured1", "relationshipToInsured1", "insuranceCarrier1", "employerForInsurance1", "policyNumber1", "idNumber1", "nameOfInsured2", "birthdateOfInsured2", "relationshipToInsured2", "insuranceCarrier2", "employerForInsurance2", "policyNumber2", "idNumber2", "lastMedicalCheckup", "medicationListing", "smoking", "alcohol", "seriousInjury", "seriousInjuryDetails", "allergies", "otherAllergies", "devices", "otherDevices", "conditions", "otherConditions", "conditionsExplanation", "dentalConcerns", "painRightNow", "painRightNowDetails", "lastDentalVisit", "lastDentalCleaning", "lastXRays", "gumBleeding", "gumSwelling", "dentalProblems", "otherDentalProblems", "jawProblems", "upsettingExperience", "upsettingExperienceDetails", "botherDental", "botherDentalDetails", "smileChange", "smileChangeDetails", "premedication", "premedicationDetails", "factualInfo", "signature", "isUnder18" 
}
```

### Deploying the Backend
Use this command to deploy your function: `firebase deploy --only functions`

