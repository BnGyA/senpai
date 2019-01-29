<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="success">
            Add new article
        </v-btn>
        <v-card>
            <v-card-title>
                <h2>Add an article</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Article Heading" v-model="newArticle.article_heading" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Article body" v-model="newArticle.article_body" prepend-icon="edit"></v-textarea>
                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="addArticle()" :loading='loading'>Add article</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            loading: false,
            dialog: false,
            newArticle: {'article_heading' : null, 'article_body' : null}
        }
    },
    methods:{
        addArticle(){
            this.loading = true;
            
            axios.post('http://127.0.0.1:8000/api/article/', this.newArticle).then(res =>{
                this.loading = false;
                this.dialog = false;
                this.$root.$emit('articleAdded');
                this.newArticle.article_heading = null;
                this.newArticle.article_body = null;
            }).catch(err =>{
                // eslint-disable-next-line
                console.log(err)
            })
        }
    }    
}
</script>
