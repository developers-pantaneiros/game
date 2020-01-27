import publicPages from './PublicPages'
import notAuthenticated from './NotAuthenticated'

const conditions = {
    publicPages,
    notAuthenticated
}

export default (to, from, next) => {
    const tasks = Object.keys(conditions)

    const nextExecuted = tasks.some((condition) => {
        if (conditions[condition].shouldExecute(to, from)) {
            conditions[condition].execute(to, from, next)
            return true
        }
        return false
    })

    if (!nextExecuted) {
        next()
    }
}
