<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Adder @articleAdded="updateList()" />
    </v-toolbar>

    <v-content>
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Adder from '@/components/Adder'
export default {
  name: 'App',
  components: {Adder},
  data () {
    return {
      
    }
  },
  methods: {
    updateList(){
      this.$root.$emit('updateList')
    }
  }
}
</script>
