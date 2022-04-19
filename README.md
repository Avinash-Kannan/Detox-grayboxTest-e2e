# Setup Detox e2e test in a basic React-native app
------------------------------------------------

### Create a basic react native app
- Run the following command :

  `npx react-native init <project_name>`
- Add any baisc header, button or input text box in App.js
- To run your app in iOS/ Android emulator, 
Run command :

  `npm run ios` /
  `npm run android`

### Install detox and jest dependencies
- `npm install -D detox`
- `npm install -D jest`

### Initiate detox setup using below command :
`npx detox init -r jest` 

This would have added detoxrc.json file and e2e folder.

### Configure iOS and Android setup for Detox
- For Detox iOS configuration , refer [Setup for iOS](https://wix.github.io/Detox/docs/introduction/ios)
- For Detox Android configuration , refer [Setup for Android](https://wix.github.io/Detox/docs/introduction/android)

### Build and Run Detox tests
1. To start metro server, Run command:

  - `npm run start`

2. To build and run tests in android emulator:
  - `npm run build-android`
  - `npm run run-android`
3. To build and run tests in iOS simulator:
  - `npm run build-ios`
  - `npm run run-ios`

