<template>
    <HeaderComp />
    <h1>Add a delivery</h1>

    <form autocomplete="off" class="add">
        <input type="text" name="name" placeholder="Name" v-model="delivery.name">
        <input type="text" name="contact" placeholder="Contact" v-model="delivery.contact">
        <input type="text" name="address" placeholder="Address" v-model="delivery.address">
        <button type="button" id="add-button" v-on:click="addDelivery">Add the delivery</button>
    </form>
</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'AddDel',
    components: {
        HeaderComp
    },
    data() {
        return {
            delivery: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'LoginPage' })
        },

        async addDelivery() {
            const result = await axios.post("http://localhost:3000/deliveries", {
                name: this.delivery.name,
                contact: this.delivery.contact,
                address: this.delivery.address
            })

            if (result.status == 201) {
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>