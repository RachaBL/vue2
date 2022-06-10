<template>
    <HeaderComp />
    <h1>Update a delivery</h1>

    <form class="add">
        <input type="text" name="name" placeholder="Name" v-model="delivery.name">
        <input type="text" name="contact" placeholder="Contact" v-model="delivery.contact">
        <input type="text" name="address" placeholder="Address" v-model="delivery.address">
        <button type="button" id="add-button" v-on:click="updateDelivery">Update the delivery</button>
    </form>
</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'UpdateDel',
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
        async updateDelivery() {
            const result = await axios.put("http://localhost:3000/deliveries/" + this.$route.params.id, {
                name: this.delivery.name,
                contact: this.delivery.contact,
                address: this.delivery.address
            })

            if (result.status == 200) {
                this.$router.push({ name: 'HomePage' })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        const result = await axios.get('http://localhost:3000/deliveries/' + this.$route.params.id)

        this.delivery = result.data
    }
}
</script>