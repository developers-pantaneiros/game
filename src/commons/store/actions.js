import actionTypes from '@/commons/constants/action-types'
import mutationTypes from '@/commons/constants/mutation-types'
import firebase from 'firebase'

export default {
    async [actionTypes.CREATE_USER]({commit}, user) {
        try {
            await firebase.firestore().collection('users').doc(user.uid).set(user)
            commit(mutationTypes.SET_USER, user)
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
