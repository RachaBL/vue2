<template>
    <HeaderComp />

    <h1>{{ name }}, welcome to the home page.</h1>

    <section>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr v-for="item in delivery" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.contact }}</td>
                        <td>{{ item.address }}</td>
                        <td>
                            <router-link class="action-btn" :to="'/update/' + item.id">
                                <i class="fas fa-pencil"></i>
                                Update
                            </router-link>
                            <button class="action-btn" v-on:click="deleteDelivery(item.id)">
                                <i class="fas fa-trash"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

</template>

<script>
import axios from 'axios'
import HeaderComp from './HeaderComp.vue'

export default {
    name: 'HomePage',
    components: {
        HeaderComp
    },
    data() {
        return {
            name: '',
            delivery: []
        }
    },
    methods: {
        async deleteDelivery(id) {
            var choice = confirm('Are you sure you want to delete delivery ID #' + id + '?')

            if (choice) {
                let result = await axios.delete("http://localhost:3000/deliveries/" + id)

                if (result.status == 200) {
                    this.loadData()
                }
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name

            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }

            let result = await axios.get("http://localhost:3000/deliveries")
            this.delivery = result.data
        }
    },
    async mounted() {
        this.loadData()
    }
}
</script>

<style>
body {
    overflow: hidden;
}

h1 {
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
}

table {
    width: 100%;
    table-layout: fixed;
}

.tbl-header {
    background-color: rgba(255, 255, 255, .3);
}

.tbl-content {
    height: 70vh;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, .2);
    background-color: rgba(255, 255, 255, .1);
}

th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
}

td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

section {
    margin: 50px;
}
</style>