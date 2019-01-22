<template>
<div>
  <h1 class="subheading grey--text">Dashboard</h1>
  <v-container class="my-5">
        <v-layout row>
          <v-flex xs12 md6>
            <v-btn outline block class="info">1</v-btn>
          </v-flex>
          <v-flex xs12 md6>
            <v-btn outline block class="info">2</v-btn>
          </v-flex>
        </v-layout>


        <v-layout row wrap justify-center>
          <v-flex md4>
            <v-btn outline block class="info">2</v-btn>
          </v-flex>
          <v-flex md4>
            <v-btn outline block class="info">2</v-btn>
          </v-flex>
        </v-layout>

         <v-layout row wrap justify-space-between>
          <v-flex md3>
            <v-btn outline block class="info">1</v-btn>
          </v-flex>
          <v-flex md3>
            <v-btn outline block class="info">2</v-btn>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
  

  export default {
    name: 'Dashboard',
  }
</script>
