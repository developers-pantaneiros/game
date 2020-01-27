class PublicPages {
    shouldExecute(to) {
        return !to.matched.some(record => record.meta.requiresAuth)
    }

    execute(to, from, next) {
        next()
    }
}

export default new PublicPages()
