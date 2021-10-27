# DVS Web API Angular Sample Application

1. Install project dependencies
```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Deploy to Firebase

1. Install the Firebase CLI

```
npm install -g firebase-tools
```

2. Login in to Firebase
```
firebase login
```

3. Setup the firebase project we are deploying to
```
firebase init
```
- Select `Yes` you are ready to proceed
- Select only the `Hosting` option
- Create a new project in your firebase account for this deployment
- Use `dist/dvs-sample-angular-app` as your public directory
- Select `Yes` when asked if you want to configure as a single-page app
- Select `No` when asked if you want to set up automatic builds and deployments with GitHub
- Select `No` when asked if you want to overwrite the `dist/dvs-sample-angular-app/index.html` file


4. Deploy the project to firebase

```
firebase deploy
```

