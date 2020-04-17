<template>
    <nav class="bottom-navigation">
        <ul class="bottom-navigation__list">
            <li class="bottom-navigation__list--item" @click="goToPage('teacherClass')">
                <font-awesome-icon size="lg" :icon="icons.faArrowLeft"/>
                <span>Voltar</span>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('teacherClassView')">
                <font-awesome-icon size="lg" :icon="icons.faUserFriends"/>
                <span>Classe</span>
            </li>
            <li class="bottom-navigation__list--item" @click="goToPage('teacherClassRanking')">
                <font-awesome-icon size="lg" :icon="icons.faTrophy"/>
                <span>Ranking</span>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faUserFriends, faTrophy } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "bottom-navigation",
        components: { FontAwesomeIcon },
        data() {
            return {
                icons: {
                    faArrowLeft,
                    faUserFriends,
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
