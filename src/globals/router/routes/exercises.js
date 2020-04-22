import ExerciseFirst from '@/views/internal/exercises/first/ExerciseFirst'
import Feedback from '@/views/internal/exercises/first/components/Feedback'

export default [
    {
        path: '/student/:studentId/classes/classroom/:classroomId/exercises/first',
        name: 'studentExerciseFirst',
        component: ExerciseFirst,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/student/:userId/classes/classroom/:classroomId/exercises/first/feedback',
        name: 'studentFeedbackExerciseFirst',
        component: Feedback,
        meta: {
            requiresAuth: true,
            authorities: 'student'
        }
    },
    {
        path: '/teacher/:teacherId/classes/:classroomId/exercices/first',
        name: 'teacherExerciseFirst',
        component: ExerciseFirst,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    },
    {
        path: '/teacher/:userId/classes/:classroomId/exercices/first/feedback',
        name: 'teacherFeedbackExerciseFirst',
        component: Feedback,
        meta: {
            requiresAuth: true,
            authorities: 'teacher'
        }
    }
]