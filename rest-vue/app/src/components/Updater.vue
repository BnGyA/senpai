<template>
    <div>
        
        <v-dialog max-width="600px" v-model="dialog">
            <v-card>
                <v-card-title>
                    <h2>Edit an article</h2>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Article Heading" v-model="currentArticle.article_heading" prepend-icon="folder"></v-text-field>
                        <v-textarea label="Article body" v-model="currentArticle.article_body" prepend-icon="edit"></v-textarea>
                        <v-spacer></v-spacer>
                        <v-btn flat class="success mx-0 mt-3" @click="updateArticle()" :loading='loading'>Add article</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['newArticle'],
    data(){
        return{
            loading: false,
            dialog: false,
            currentArticle: {}
        }
    },
    methods:{
        addArticle(){
            this.loading = true;
            
            axios.put(`http://127.0.0.1:8000/api/article/${this.currentArticle.article_id}/`, this.currentArticle).then(res =>{
                this.loading = false;
                this.dialog = false;
                this.currentArticle = res.data;
                this.$emit('articleUpdated');
                this.currentArticle.article_heading = null;
                this.currentArticle.article_body = null;
            }).catch(err =>{
                // eslint-disable-next-line
                console.log(err)
            })
        }
    }    
}
</script>
