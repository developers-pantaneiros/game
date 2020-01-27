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
        const user = store.state.user
        return (user.uid !== undefined)
    }
}

export default new NotAuthenticated()
