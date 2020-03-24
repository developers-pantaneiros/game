import ClassSearch from '@/views/internal/student/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/student/class/add/ClassAdd.vue'
import ClassRoom from '@/views/internal/student/class/classroom/ClassRoom.vue'
import ClassExercises from '@/views/internal/student/class/exercises/ClassExercises.vue'
import ClassRanking from '@/views/internal/student/class/ranking/ClassRanking.vue'
import ExerciseFirst from '@/views/internal/student/exercises/first/ExerciseFirst.vue'
import Feedback from '@/views/internal/student/exercises/first/components/Feedback'

export default [
    {
        path: '/student/:studentId/classes',
        name: 'studentClass',
        component: ClassSearch,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:studentId/classes/add',
        name: 'studentClassAdd',
        component: ClassAdd,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:studentId/classes/classroom/:uid',
        name: 'studentClassRoom',
        component: ClassRoom,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:studentId/classes/classroom/:uid/exercises',
        name: 'studentExercises',
        component: ClassExercises,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:studentId/classes/classroom/:uid/ranking',
        name: 'studentRanking',
        component: ClassRanking,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:studentId/classes/classroom/:uid/exercises/first',
        name: 'exerciseFirst',
        component: ExerciseFirst,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:studentId/classes/classroom/:uid/exercises/first/feedback',
        name: 'feedbackExerciseFirst',
        component: Feedback,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    }
]
