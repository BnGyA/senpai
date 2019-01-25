<template>
    <div class="login">
        <h1 class="subheading grey--text">Signup</h1>
         <v-container class="my-5">
             <v-layout row >
                <v-spacer></v-spacer>
                <v-flex xs-6>
                    <v-card class="mb-3 px-3 py-3" >
                        <v-form class="mb-3">
                            <v-text-field label="Email" v-model="email"></v-text-field>
                            <v-text-field type="password" label="Password" v-model="password"></v-text-field>
                            <v-btn @click="signUp()" class="success ml-0" flat>Signup</v-btn>
                        </v-form>
                        <p>Already have an account ? You can <router-link to="/login">login</router-link></p>
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
    name: 'Signup',
    data(){
        return{
            email: '',
            password: '',
        }
    },

    methods: {
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) =>{
                // eslint-disable-next-line 
                console.log(user)
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
