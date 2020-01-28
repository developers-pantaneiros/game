import actionTypes from '@/commons/constants/action-types'
import mutationTypes from '@/commons/constants/mutation-types'
import firebase from 'firebase'

export default {
    async [actionTypes.CREATE_CLASS](context, classToSave) {
        try {
            const createdClass = await firebase.firestore().collection('classes').add(classToSave)
            return createdClass
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.CREATE_USER]({commit}, user) {
        try {
            await firebase.firestore().collection('users').doc(user.uid).set(user)
            commit(mutationTypes.SET_USER, user)
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.FIND_CLASSES](context, uid) {
        try {
            const reference = firebase.firestore().collection('users').doc(uid)
            const snapshot = await firebase.firestore().collection('classes').where('teacher', '==', reference).get()

            const classes = []
            snapshot.forEach(doc =>  classes.push(doc.data()))

            return classes
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.FIND_USER]({commit}, uid) {
        try {
            const response = await firebase.firestore().collection('users').doc(uid).get()
            const user = response.data()
            commit(mutationTypes.SET_USER, user)
            return user
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.SIGNIN](context, {email, password}) {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            return user
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.SIGNUP](context, {email, password}) {
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            return user
        } catch (error) {
            throw error
        }
    }
}
