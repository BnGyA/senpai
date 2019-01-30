<template>
  <div class="about">
    <v-container>
      <v-layout row class="mb-3" justify-end>  
          <h1>Articles</h1>
          <v-spacer></v-spacer>
          <Adder @articleAdded="getArticles()" />
      </v-layout>
      <v-layout>
        <v-flex>
          <v-data-table :headers="headers" :items="posts">
            <template slot="items" slot-scope="props">
              <td>{{props.item.article_heading}}</td>
              <td>{{props.item.article_body}}</td>
              <td>
                <!--<v-btn flat class="success" @click="passArticle(props.item.article_id)" >
                    Edit        
                </v-btn>-->
                <Updater :currentArticle="props.item"/>
                <!--<v-btn class="success" @click="getArticle(props.item.article_id)">Edit</v-btn>-->
                <v-btn class="warning" @click="deleteArticle(props.item.article_id)">Delete</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>


<script>
import axios from 'axios'
import Adder from '@/components/Adder'
import Updater from '@/components/Updater'
export default {
    name: 'About',
    components: {Adder, Updater},
    
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
        currentArticle: []
      }
    },
    methods: {
      getArticles(){
        this.loading = true;
        axios.get('http://127.0.0.1:8000/api/article/').then((res) =>{
          this.posts = res.data
          this.loading = false
        }).catch(err => {
          this.loading = false
          // eslint-disable-next-line
          console.log(err)
        })
      },
     getArticle(id){ 
            this.loading = true;
            axios.get(`http://127.0.0.1:8000/api/article/${id}/`).then((res) =>{
            this.currentArticle = res.data
            // eslint-disable-next-line
            console.log(this.currentArticle)
            this.loading = false;
            }).catch(err => {
            this.loading = false
            // eslint-disable-next-line
            console.log(err)
            })
        },
      deleteArticle(id){
        this.loading = true;
        axios.delete(`http://127.0.0.1:8000/api/article/${id}/`).then(() =>{
          this.loading = false;
          this.getArticles();
        }).catch(err =>{
          this.loading = false;
          // eslint-disable-next-line
          console.log(err)
        })
      }
    },
    
    created(){
      this.getArticles();
    }
}
</script>

<style>

</style>
