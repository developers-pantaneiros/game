import mutationTypes from '@/commons/constants/mutation-types'

export default {
    [mutationTypes.SET_USER] (state, user) {
        state.user = user
    },
}
