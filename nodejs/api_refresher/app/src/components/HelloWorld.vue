<template>
  <div>
    <form @submit="formSubmit">
      <input v-model="question" />
      <button >Post</button>
    </form>

    <button @click="create">Create session</button>
    <button @click="reset">Reset</button>

    <div>
      <ul>
      <li style="display: block;" v-for="(answer, index) in answers" :key="`answer-${index}`">
          {{answer}}
      </li>
      <li v-if="isLoading" style="position: relative;">
        <img style="width: 50px; position: absolute; top: -30px; left: -25px;" src="../assets/loadng.gif" alt="">
      </li>
        </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'HelloWorld',
    data(){
      return{
        isLoading: false,
        question : '',
        answers: [

        ],

      }
    },
    methods: {
      formSubmit(e) {
        e.preventDefault();
        //console.log(this.question);
        
        this.answers.push(this.question);
        this.isLoading = true;
        axios.post('http://localhost:8080/api/post', {
            data: {question: this.question},
            headers: {
                "Content-Type": "multipart/form-data"
            }}).then((res) =>{
              this.question = '';
              setTimeout(() => {
           console.log(res.data.answer);
              this.answers.push(res.data.answer);
              this.isLoading = false;
        }, 500);  // This promise will be resolved in 2000 milli-seconds
              
        })
      },
      create(e) {
        axios.post('http://localhost:8080/api/create').then((res) =>{
          console.log(res);
        })
      },
      reset(){
        this.answers = [];
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
