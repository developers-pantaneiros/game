import ClassSearch from '@/views/internal/teacher/class/search/ClassSearch.vue'

export default [
    {
        path: '/teacher/classes',
        name: 'teacherClass',
        component: ClassSearch,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    }
]
