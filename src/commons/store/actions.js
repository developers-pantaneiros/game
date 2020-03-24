import actionTypes from '@/commons/constants/action-types'
import mutationTypes from '@/commons/constants/mutation-types'
import firebase from 'firebase'

import createRandomId from '@/globals/utils/createRandomId'

export default {
    async [actionTypes.CREATE_CLASS]({dispatch}, classToSave) {
        try {
            const id = createRandomId()
            classToSave.uid = id
            await firebase.firestore().collection('classes').doc(id).set(classToSave)
            return classToSave
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

    async [actionTypes.FIND_CLASS](context, uid) {
        try {
            const classFound = await firebase.firestore().collection('classes').doc(uid).get()
            return classFound.data()
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.FIND_STUDENT_CLASSES](context, uid) {
        try {
            const reference = firebase.firestore().collection('users').doc(uid)
            const snapshot = await firebase.firestore().collection('classes').where('students', 'array-contains', reference).get()

            const classes = []
            snapshot.forEach(doc =>  classes.push(doc.data()))

            return classes
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.FIND_TEACHER_CLASSES](context, uid) {
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

    async [actionTypes.FIND_MANY_USERS_BY_REFERENCE](context, references) {
        try {
            const users = []
            let response
            for (let i = 0; i < references.length; i++) {
                response = await references[i].get()
                users.push(response.data())
            }
            return users
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.FIND_SCORE_USER]({commit}, uid) {
        try {
            const response = await firebase.firestore().collection('users').doc(uid).get()
            const score = response.data().score
            return score
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

    async [actionTypes.FIND_USER_BY_REFERENCE](context, reference) {
        try {
            const response = await reference.get()
            const user = response.data()
            return user
        } catch (error) {
            throw error
        }
    },

    async [actionTypes.JOIN_CLASS]({dispatch}, {code, user}) {
        try {
            const classFound = await dispatch(actionTypes.FIND_CLASS, code)
            
            if (!classFound) {
                const error = {code: 'business-rule/class-not-found'}
                throw error
            }

            await firebase.firestore().collection('classes').doc(classFound.uid).update({
                    students: firebase.firestore.FieldValue.arrayUnion(user)
                })

            return classFound
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
    },

    async [actionTypes.UPDATE_SCORE_USER](context, {user, score}) {
        debugger
        try {
            await firebase.firestore().collection('users').doc(user).update({
                score: score
            })
        } catch (error) {
            throw error
        }
    }
}
