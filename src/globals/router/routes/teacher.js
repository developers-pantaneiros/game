import ClassSearch from '@/views/internal/teacher/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/teacher/class/detail/ClassAdd.vue'
import ClassView from '@/views/internal/teacher/class/detail/ClassView.vue'

export default [
    {
        path: '/teacher/classes',
        name: 'teacherClass',
        component: ClassSearch,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/classes/add',
        name: 'teacherClassAdd',
        component: ClassAdd,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/classes/view/:classroomId',
        name: 'teacherClassView',
        component: ClassView,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    }
]
