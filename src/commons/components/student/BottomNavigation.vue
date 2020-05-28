<template>
    <nav class="bottom-navigation">
        <ul class="bottom-navigation__list">
            <li class="bottom-navigation__list--item" @click="goToPage('studentClass')">
                <font-awesome-icon size="lg" :icon="icons.faArrowLeft"/>
                <h5>Voltar</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentClassRoom')">
                <font-awesome-icon size="lg" :icon="icons.faUserFriends"/>
                <h5>Classe</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentExercises')">
                <font-awesome-icon size="lg" :icon="icons.faMicroscope"/>
                <h5>Desafios</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentScore')">
                <font-awesome-icon size="lg" :icon="icons.faStar"/>
                <h5>Desempenho</h5>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentRanking')">
                <font-awesome-icon size="lg" :icon="icons.faTrophy"/>
                <h5>Ranking</h5>
            </li>
        </ul>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faUserFriends, faMicroscope, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "bottom-navigation",
    components: { FontAwesomeIcon },
    data() {
        return {
            icons: {
                faArrowLeft,
                faUserFriends,
                faMicroscope,
                faStar,
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
