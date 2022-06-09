<template>
    <HeaderComp />
    <h1>{{ name }}, welcome to the home page.</h1>
</template>

<script>
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'HomePage',
    components: {
        HeaderComp
    },
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        this.name = JSON.parse(user).name

        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>