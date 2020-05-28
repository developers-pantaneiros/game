<template>
    <nav class="bottom-navigation">
        <ul class="bottom-navigation__list">
            <li class="bottom-navigation__list--item" @click="goToPage('teacherClass')">
                <font-awesome-icon size="lg" :icon="icons.faArrowLeft"/>
                <h5>Voltar</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('teacherClassView')">
                <font-awesome-icon size="lg" :icon="icons.faUserFriends"/>
                <h5>Classe</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('teacherExercises')">
                <font-awesome-icon size="lg" :icon="icons.faMicroscope"/>
                <h5>Desafios</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('teacherClassRanking')">
                <font-awesome-icon size="lg" :icon="icons.faTrophy"/>
                <h5>Ranking</h5>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faUserFriends, faMicroscope, faTrophy } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "bottom-navigation",
        components: { FontAwesomeIcon },
        data() {
            return {
                icons: {
                    faArrowLeft,
                    faUserFriends,
                    faMicroscope,
                    faTrophy
                }
            }
        },
        methods: {
            goToPage(pageName) {
                if (this.$router.app._route.name !== pageName) {
                    this.$router.push({ name: pageName });
                }
            }
        }
    }
</script>
