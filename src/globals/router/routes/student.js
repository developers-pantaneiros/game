import ClassSearch from '@/views/internal/student/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/student/class/add/ClassAdd.vue'
import ClassRoom from '@/views/internal/student/class/classroom/ClassRoom.vue'
import ClassExercises from '@/views/internal/student/class/exercises/ClassExercises.vue'
import ClassRanking from '@/views/internal/student/class/ranking/ClassRanking.vue'

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
        path: '/student/classes/classroom/:uid/exercises',
        name: 'studentExercises',
        component: ClassExercises,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/classes/classroom/:uid/ranking',
        name: 'studentRanking',
        component: ClassRanking,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    }
]
