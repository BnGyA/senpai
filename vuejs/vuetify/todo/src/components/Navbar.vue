<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" color="success" top right>
            <span>Awesome! You added a new project.</span>
            <v-btn flat color="white" @click="closeSnack()">Close</v-btn>
        </v-snackbar>

        <v-snackbar v-model="welcomeBar" :timeout="4000" color="success" top right>
            <span>Welcome back !</span>
            <v-btn flat color="white" @click="closeWelcome()">Close</v-btn>
        </v-snackbar>

        <v-toolbar flat app>
            <v-toolbar-title class="text-uppercase grey--text">
                <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon >
                <span class="font-weight-light">Test</span>
                <span>Yolo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey" router to='/login'>
                <span>Login</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
            <v-btn flat color="grey" @click='logout()'>
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app  class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5 text-xs-center">
                    <v-avatar size='100'>
                        <img src="https://dummyimage.com/100x100/000/fff" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Benjamin Rochez</p>

                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="openSnack()" />
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'
import firebase from 'firebase'
export default {
    components: { Popup },
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
                {icon: 'folder', text: 'My Projects', route: '/project'},
                {icon: 'person', text: 'Team', route: '/team'},
            ],
            snackbar: false,
            welcomeBar: false
        }
    },
    methods: {
        closeSnack(){
            this.snackbar = false;
        },
        openSnack(){
            this.snackbar = true;
        },
        openWelcome(){
            this.welcomeBar = true;
        },
        closeWelcome(){
            this.welcomeBar = false;
        },
        logout(){
            firebase.auth().signOut().then(() =>{
                this.$router.replace('login');
            })
        }
    },
    watch:{
        $route (to, from){
        if(from.name === 'login' && to.name === 'dashboard'){
            this.openWelcome();
        }
    }
} 
}
</script>

<style>
.v-list__tile--active {
    border-left: 4px solid #3cd1c2;
}
</style>
