<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-title class="text-uppercase grey--text">
                <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon >
                <span class="font-weight-light">Test</span>
                <span>Yolo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app temporary class="primary">
            <p>hi</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false
        }
    }
}
</script>
