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
4. Setup Firebase Hosting
   1. Navigate to your frontend directory in a command shell
   2. Run `firebase init hosting`
      - *What do you want to use as your public directory?:* public
      - *Configure as a single-page app (rewrite all urls to /index.html)?:* Yes
      - *Set up automatic builds and deploys with GitHub?:* Yes
      - *File public/index.html already exists. Overwrite?:* No
      - *For which GitHub repository would you like to set up a GitHub workflow?* your/repo
      - *Set up the workflow to run a build script before every deploy?* Yes
      - *What script should be run before every deploy?* npm ci && npm run build
      - *Set up automatic deployment to your site's live channel when a PR is merged?* Yes
      - *What is the name of the GitHub branch associated with your site's live channel?* main

## Testing
1. Run the react project with `npm start`

## Deployment
1. To deploy to Firebase, run `firebase deploy --only hosting`
