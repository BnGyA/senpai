<template>
  <div>
    <h1 class="subheading grey--text">Project</h1>
    <v-container class="my-5">
        <v-expansion-panel flat>
          <v-expansion-panel-content v-for="project in myProjects" :key='project.title'>
              <div slot="header">{{project.title}}</div>
              <v-card>
                <v-card-text class="px-4 grey--text">
                  <div class="font-weight-bold">due by {{project.due}}</div>
                  <div>{{project.content}}</div>
                </v-card-text>
              </v-card>
          </v-expansion-panel-content> 
        </v-expansion-panel>
    </v-container>
  </div>
</template>
<script>
  import db from '@/main'

  export default {
    name: 'project',
    data(){
      return{
        projects: []
    }
    },
    computed: {
      myProjects(){
        return this.projects.filter(project =>{
          return project.person === 'Coder Duck'
        })
      }
    },

    created(){
    db.collection('projects').onSnapshot(res =>{
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            // spread the properties
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }
  }
</script>