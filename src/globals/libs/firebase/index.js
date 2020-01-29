import firebase from 'firebase/app'
import credentials from './credentials'

import store from '@/commons/store'
import mutationTypes from '@/commons/constants/mutation-types'

firebase.initializeApp(credentials)
