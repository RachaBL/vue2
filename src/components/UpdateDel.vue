<template>
    <HeaderComp />
    <h1>User, update a delivery.</h1>
</template>

<script>
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'UpdateDel',
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