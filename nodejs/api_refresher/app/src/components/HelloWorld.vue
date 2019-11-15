<template>
  <div>
    <form @submit="formSubmit">
      <input v-model="question" />
      <button >Post</button>
    </form>

    <button @click="create">Create</button>

    <div>

    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'HelloWorld',
    data(){
      return{
        question : '',
        answers: {},
      }
    },
    methods: {
      formSubmit(e) {
        e.preventDefault();
        //console.log(this.question);

        axios.post('http://localhost:8080/api/post', {
            data: {question: this.question},
            headers: {
                "Content-Type": "multipart/form-data"
            }}).then((res) =>{
              console.log(res.data.answer)
        })
      },
      create(e) {
        axios.post('http://localhost:8080/api/create').then((res) =>{
          console.log(res);
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
