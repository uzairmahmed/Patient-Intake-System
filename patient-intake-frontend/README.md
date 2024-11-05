# Frontend

## Setup
1. Setup react project
   1. Run `npm install` to install dependencies
   2. Test the build with `npm start`
2. Setup reCAPTCHA on reCAPTCHA Admin Console
   1. Create an app
        - Name the app
        - Set your domain to 'localhost'
   2. Copy your reCAPTCHA Site Key to your .env file
3. Setup Firebase Admin SDK on Firebase Console
   1. Go to `Settings > Project Settings > Your Apps`
   2. Add App
        - Name the App
        - Select Web App
   3. Copy the firebaseConfig information to your .env file
   4. Go to `App Check > Apps` and select your web app
        - Copy your reCAPTCHA Sercet Key to the field under reCAPTCHA

## Testing
1. Run the react project with `npm start`

## Deployment
