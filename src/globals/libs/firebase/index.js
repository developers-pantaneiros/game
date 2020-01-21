import firebase from 'firebase/app'
import credentials from './credentials'

import store from '@/commons/store'
import mutationTypes from '@/commons/constants/mutation-types'

firebase.initializeApp(credentials)

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        firebase.firestore().collection('users').doc(user.uid).get().then(response => {
            store.commit(mutationTypes.SET_USER, response.data())
        })
    }
})
