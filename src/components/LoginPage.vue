<template>
    <img class="logo" src="../assets/logo.png" alt="">

    <h1>Login</h1>

    <div class="login">
        <input type="text" v-model="email" placeholder="E-Mail" id="email">
        <input type="password" v-model="password" placeholder="Password" id="password">
        <button v-on:click="login" id="login-button">Login</button>
        <p>
            <router-link to="/sign-up">I don't have an account.</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
}
</script>