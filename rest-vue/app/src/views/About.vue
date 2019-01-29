<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-data-table :headers="headers" :items="posts">
      <template slot="items" slot-scope="props">
        <td>{{props.item.article_heading}}</td>
        <td>{{props.item.article_body}}</td>
        <td>
          <v-btn class="primary" @click="deleteArticle(props.item.article_id)">Delete</v-btn>
        </td>
      </template>
    </v-data-table>

  </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'About',
    data(){
      return {
        headers: [
          {
            text: 'Article heading',
            value: 'title',
          },
          {
            text: 'Article body',
            value: 'body'
          },
          {
            text: 'Actions',
            value: 'actions'
          }
          
        ],
        posts: [],
        loading: false,
      }
    },
    methods: {
      getArticles(){
        this.loading = true;
        axios.get('http://127.0.0.1:8000/api/article/').then((res) =>{
          console.log(res)
          this.posts = res.data
          this.loading = false

          console.log(this.posts)
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      },
      getArticle(id){
        this.loading = true;
        axios.get(`http://127.0.0.1:8000/api/article/${id}`).then((res) =>{
          console.log(res)
          this.posts = res.data
          this.loading = false;
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      },
      deleteArticle(id){
        this.loading = true;
        axios.delete(`http://127.0.0.1:8000/api/article/${id}/`).then((res) =>{
          this.loading = false;
          this.getArticles();
        }).catch(err =>{
          this.loading = false;
          console.log(err)
        })
      }
    },
    mounted(){
      this.$root.$on('articleAdded', () =>{
        this.getArticles();
      })
    },
    created(){
      this.getArticles();
    }
}
</script>

<style>

</style>
