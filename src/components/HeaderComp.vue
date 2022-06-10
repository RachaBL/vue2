<template>
    <nav class="nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/add">Add Delivery</router-link>
        <a class="nav-link" v-on:click="logout" href="#">Logout</a>
        <div class="animation start-home"></div>

    </nav>
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

<style scoped>
nav {
    margin: 27px auto 50px;

    position: relative;
    width: 370px;
    height: 50px;
    background-color: transparent;
    border-radius: 8px;
    font-size: 0;
}

.nav-link {
    line-height: 50px;
    height: 100%;
    font-size: 18px;
    display: inline-block;
    position: relative;
    z-index: 1;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: white;
    cursor: pointer;
}

.nav-link:focus {
    outline: 0;
    border: 1px solid #fff;
    border-radius: 8px;
}

nav .animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    transition: all .5s ease 0s;
    border-radius: 8px;
    background-color: #BF68FF;
}

.nav-link:nth-child(1) {
    width: 120px;
}

.nav-link:nth-child(2) {
    width: 130px;
}

.nav-link:nth-child(3) {
    width: 120px;
}

nav .start-home,
.nav-link:nth-child(1):hover~.animation {
    width: 120px;
    left: 0;
}

nav .start-about,
.nav-link:nth-child(2):hover~.animation {
    width: 130px;
    left: 120px;
}

nav .start-blog,
.nav-link:nth-child(3):hover~.animation {
    width: 120px;
    left: 250px;
}

body {
    font-size: 12px;
    font-family: sans-serif;
    background: #2c3e50;
}

h1 {
    text-align: center;
    margin: 40px 0 40px;
    text-align: center;
    font-size: 30px;
    color: #ecf0f1;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Cherry Swash', cursive;
}

p {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    color: #ecf0f1;
    font-family: 'Cherry Swash', cursive;
    font-size: 16px;
}

span {
    color: #2BD6B4;
}
</style>