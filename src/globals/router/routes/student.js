import ClassSearch from '@/views/internal/student/class/search/ClassSearch.vue'

export default [
    {
        path: '/student/classes',
        name: 'studentClass',
        component: ClassSearch,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    }
]
