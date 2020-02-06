import ClassSearch from '@/views/internal/student/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/student/class/detail/ClassAdd.vue'
import ClassView from '@/views/internal/student/class/detail/ClassView.vue'

export default [
    {
        path: '/student/classes',
        name: 'studentClass',
        component: ClassSearch,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/classes/add',
        name: 'studentClassAdd',
        component: ClassAdd,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/classes/view/:uid',
        name: 'studentClassView',
        component: ClassView,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    }
]
