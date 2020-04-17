import ClassSearch from '@/views/internal/teacher/class/search/ClassSearch.vue'
import ClassAdd from '@/views/internal/teacher/class/detail/ClassAdd.vue'
import ClassView from '@/views/internal/teacher/class/detail/ClassView.vue'
import ClassRanking from '@/views/internal/teacher/class/detail/ClassRanking'

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
        path: '/teacher/:teacherId/classes/:classroomId/ranking',
        name: 'teacherClassRanking',
        component: ClassRanking,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    }
]
