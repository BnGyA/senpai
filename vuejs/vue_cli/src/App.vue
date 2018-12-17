<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar /> 
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
    <Blogs />
  </div>
</template> 

<script>
import  Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blogs from './Blogs'

export default {
  name: 'app',
  components: {
    //Navbar: Navbar -> es6
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data () {
    return {
      title: "App" ,
      friends: [
        {  name: "Mario", online: true },
        {  name: "Luigi", online: false },
        {  name: "Toad", online: true },
        {  name: "Bowser", online: false },
      ]
    }
  },
  methods: {
    deleteFriend(payload){
      this.friends = this.friends.filter(friend => {
          return friend.name !== payload.name;
      })
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
