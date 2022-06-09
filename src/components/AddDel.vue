<template>
    <HeaderComp />
    <h1>User, add a delivery.</h1>
</template>

<script>
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'AddDel',
    components: {
        HeaderComp
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'LoginPage' })
        }
    }
}
</script>