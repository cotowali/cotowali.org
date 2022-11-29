import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyB9kRgqc6K3N6b2oX-N9QfQTZGD86uguaU',
  authDomain: 'cotowali.firebaseapp.com',
  projectId: 'cotowali',
  storageBucket: 'cotowali.appspot.com',
  messagingSenderId: '156438306367',
  appId: '1:156438306367:web:e1e6e0081397104f26a28a',
  measurementId: 'G-5P9SZXBNXN',
}

export default defineNuxtPlugin(() => {
  const app = initializeApp(firebaseConfig)
  const _analytics = getAnalytics(app)
})
