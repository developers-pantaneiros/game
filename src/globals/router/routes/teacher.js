import ClassSearch from '@/views/internal/teacher/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/teacher/class/add/ClassAdd.vue'
import ClassView from '@/views/internal/teacher/class/detail/ClassView.vue'
import ClassRanking from '@/views/internal/teacher/class/ranking/ClassRanking'
import ClassExercises from '@/views/internal/teacher/class/exercises/ClassExercises'

export default [
    {
        path: '/teacher/:teacherId/classes',
        name: 'teacherClass',
        component: ClassSearch,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/:teacherId/classes/add',
        name: 'teacherClassAdd',
        component: ClassAdd,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/:teacherId/classes/:classroomId/view',
        name: 'teacherClassView',
        component: ClassView,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/:teacherId/classes/:classroomId/exercices',
        name: 'teacherExercises',
        component: ClassExercises,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/:teacherId/classes/:classroomId/ranking',
        name: 'teacherClassRanking',
        component: ClassRanking,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    }
]
