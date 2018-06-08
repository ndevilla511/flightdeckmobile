import { apiKey } from '../../apiKey.js'

const config = () => {
  return {
    apiKey: apiKey,
    authDomain: "flightdeckmobile-test.firebaseapp.com",
    databaseURL: "https://flightdeckmobile-test.firebaseio.com",
    projectId: "flightdeckmobile-test",
    storageBucket: "flightdeckmobile-test.appspot.com",
    messagingSenderId: "341800458679"
  };
};

export default config;