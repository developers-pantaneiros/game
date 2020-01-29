import store from '@/commons/store'
import firebase from 'firebase'

class NotAuthenticated {
    shouldExecute(to) {
        return !this.isUserAuthenticated()
    }

    execute(to, from, next) {
        next({name: 'signin'})
    }

    isUserAuthenticated() {
        const user = firebase.auth().currentUser
        return user
    }
}

export default new NotAuthenticated()
