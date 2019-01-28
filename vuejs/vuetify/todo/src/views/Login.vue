<template>
    <div class="login">
        <h1 class="subheading grey--text">Login</h1>
         <v-container class="my-5">
             <v-layout row>
                <v-spacer></v-spacer>
                <v-flex xs-6> 
                    <v-card class="mb-3 px-3 py-3"> 
                        <v-form class="mb-3">
                            <v-text-field label="Email" v-model="email"></v-text-field>
                            <v-text-field type="password" label="Password" v-model="password"></v-text-field>
                            <v-btn @click="login()" class="success ml-0" flat>Connection</v-btn>
                        </v-form>
                        <p>You don't have an account ? You can <router-link to="/signup">create one</router-link></p>
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
             </v-layout>
         </v-container>
    </div>
</template>


<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                
                this.$router.replace('/dashboard');
            },
            (err) =>{
                // eslint-disable-next-line
                console.log('Error: ', err)
            });
        }
    }
}
</script>


<style>

</style>
