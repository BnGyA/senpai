<template>
    <div class="view-profile">
        <h2>Profile</h2>
        <p>{{userId}}</p>
    </div>
</template>

<script>
export default {
    name:'ViewProfile',
    data(){
        return{
            userId: this.$route.params.user_id
        }
    },
    methods: {
        updateId(){
            this.userId = this.$route.params.user_id
        }
    },
    watch: {
        $route: 'updateId'
    }
}
</script>

<style>
</style>
