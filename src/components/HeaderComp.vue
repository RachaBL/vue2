<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Delivery</router-link>
        <router-link to="/update">Update Delivery</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'LoginPage' })
        }
    }
}
</script>

<style>
.nav {
    background-color: indigo;
    overflow: hidden;
}

.nav a {
    float: left;
    color: white;
    padding: 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background-color: lightskyblue;
}
</style>