<template>
    <nav class="main-nav">
        <ul>
            <li><router-link :to="{ name: 'Home'}">Home</router-link></li>
            <li><router-link :to="{ name: 'About'}">About</router-link></li>
        </ul>
        <h2>User Profiles</h2>
        <ul>
            <li v-for="(id, index) in userIds" :key="index">
                <router-link :to="{ name: 'ViewProfile', params: {user_id: id}}">Profile {{id}}</router-link>
            </li>
        </ul>
        <h2>Redirect to Home</h2>
        <ul>
            <li><button @click="goBack">Redirect Back</button></li>
            <li><button @click="goHome">Redirect to Home</button></li>
            <li><button @click="goForward">Redirect Forward</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            userIds: ['1', '2', '3', '4']
        }
    },
    methods: {
        goHome(){
            this.$router.push({ name: 'Home' })
        },
        goBack(){
            this.$router.go(-1)
        },
        goForward(){
            this.$router.go(+1)
        }
    }
}
</script>

<style>
ul{
    list-style-type: none;
    padding: 0;
}
li{
    display: inline-block;
    margin-right: 5px;
}
a{
    color: #42b983;
}
</style>

