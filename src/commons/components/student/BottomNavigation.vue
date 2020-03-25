<template>
    <nav class="bottom-navigation">
        <ul class="bottom-navigation__list">
            <li class="bottom-navigation__list--item" @click="goToPage('studentClass')">
                <font-awesome-icon size="lg" :icon="icons.faArrowLeft"/>
                <span>Voltar</span>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentClassRoom')">
                <font-awesome-icon size="lg" :icon="icons.faUserFriends"/>
                <span>Classe</span>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentExercises')">
                <font-awesome-icon size="lg" :icon="icons.faMicroscope"/>
                <span>Desafios</span>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('studentRanking')">
                <font-awesome-icon size="lg" :icon="icons.faTrophy"/>
                <span>Desempenho</span>
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
