import mutationTypes from '@/commons/constants/mutation-types'

export default {
    [mutationTypes.SET_USER] (state, user) {
        state.user = user
        localStorage.setItem('user', user.uid)
        localStorage.setItem('role', user.role)
    },

    [mutationTypes.SET_MYCLASSES] (state, myClasses) {
        state.myClasses = myClasses
    },

    [mutationTypes.SET_CLASSROOM] (state, classroom) {
        state.class = classroom
        localStorage.setItem('class', classroom.uid)
    },
}
