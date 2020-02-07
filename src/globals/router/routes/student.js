import ClassSearch from '@/views/internal/student/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/student/class/add/ClassAdd.vue'
import ClassRoom from '@/views/internal/student/class/classroom/ClassRoom.vue'
import ClassExerciciesSearch from '@/views/internal/student/class/exercicies/ClassExerciciesSearch.vue'

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
        path: '/student/classes/classroom/:uid',
        name: 'studentClassRoom',
        component: ClassRoom,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/classes/classroom/:uid/exercicies',
        name: 'studentExercicies',
        component: ClassExerciciesSearch,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    }
]
