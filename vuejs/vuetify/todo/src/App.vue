<template>
  <v-app :dark="darkTheme">
    <Navbar @toggleDark="toggleDark"/> 
    
      <v-content class="mx-4 mb-4">
        <transition name="fade">
        <router-view></router-view>
        </transition>
      </v-content>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import firebase from 'firebase'

export default {
  name: 'App', 
  components: {Navbar },
  data () {
    return {
      currUser: '',
      darkTheme: false
    }
  },
  methods: {
    toggleDark(){
      
      this.darkTheme = !this.darkTheme
    }
  }
  
}
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
