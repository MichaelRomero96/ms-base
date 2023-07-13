/* class Storage {
  private static instance: Storage;

  constructor() {
    if (Storage.instance) {
      throw new Error('Error - use Storage.getInstance()');
    }
    Storage.instance = this;
  }

  public static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
}

export default Storage; */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEOsOMaTbl1JQXUzH1ahXyEZNd_6Xppnw',
  authDomain: 'ms-base-app.firebaseapp.com',
  projectId: 'ms-base-app',
  storageBucket: 'ms-base-app.appspot.com',
  messagingSenderId: '528524816555',
  appId: '1:528524816555:web:803aab96cbb66e734187ee',
  measurementId: 'G-DR3RR05PVC',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
