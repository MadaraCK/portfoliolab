import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBiMP-gG3LJknsCpT1p-70j1W_S2Bvh1Xo",
    authDomain: "oddaj-rzeczy-e19e4.firebaseapp.com",
    projectId: "oddaj-rzeczy-e19e4",
    storageBucket: "oddaj-rzeczy-e19e4.appspot.com",
    messagingSenderId: "589811115170",
    appId: "1:589811115170:web:9ff87edd3c2f1b3a84a3fb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)