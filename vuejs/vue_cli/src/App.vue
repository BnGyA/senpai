<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
  </div>
</template>

<script>
import  Navbar from './Navbar'

export default {
  name: 'app',
  components: {
    //Navbar: Navbar -> es6
    Navbar
  },
  data () {
    return {
      title: "App" 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
