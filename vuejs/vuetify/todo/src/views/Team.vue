<template>
  <div class="about">
    <h1 class="subheading grey--text">Our Team</h1>
    <v-container class="my-5">
       <v-layout row wrap>
           <v-flex xs12 sm6 md4 lg3 v-for='person in team' :key="person.name">
               <v-card flat class="text-xs-center ma-3">
                   <v-responsive class="pt-4">
                        <v-avatar size='100'>
                            <img :src="person.avatar" alt="">
                        </v-avatar>
                   </v-responsive>

                   <v-card-text>
                       <div class="subheading">
                           {{person.name}}
                       </div>
                       <div class="grey--text">
                           {{person.role}}
                       </div>
                   </v-card-text>
                   <v-card-actions>
                       <v-btn flat color="grey">
                           <v-icon small left>message</v-icon>
                           <span>Message</span>
                       </v-btn>
                   </v-card-actions>
               </v-card>
           </v-flex>
       </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: 'https://dummyimage.com/100x100/000/fff' },
        { name: 'Ryu', role: 'Graphic designer', avatar: 'https://dummyimage.com/100x100/000/fff' },
        { name: 'Chun Li', role: 'Web developer', avatar: 'https://dummyimage.com/100x100/000/fff' },
        { name: 'Gouken', role: 'Social media maverick', avatar: 'https://dummyimage.com/100x100/000/fff' },
        { name: 'Yoshi', role: 'Sales guru', avatar: 'https://dummyimage.com/100x100/000/fff'}
      ]
    }
  }
}
</script>