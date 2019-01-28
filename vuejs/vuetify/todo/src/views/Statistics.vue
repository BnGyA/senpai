<template>
    <div class="login">
        <h1 class="subheading grey--text">Statistics</h1>
         <v-container class="my-5"  grid-list-xl>
             <v-layout row wrap>
                
                <v-flex xs6>
                    <v-card flat class="mb-3 px-3 py-3" >
                        <canvas id="completed"></canvas>
                    </v-card>
                </v-flex>

                <v-flex xs6>
                    <v-card flat class="mb-3 px-3 py-3" >

                        <canvas id="radar"></canvas> 
                    </v-card>
                </v-flex>

                <v-flex xs4>
                    <v-card flat class="mb-3 px-3 py-3" >
                        <h1>Title</h1>
                    </v-card>
                </v-flex>
             </v-layout>
         </v-container>
    </div>
</template>


<script>
import completed from '@/charts/completed'
import radar from '@/charts/radar'
import Chart from 'chart.js';
export default {
    name: 'Statistics',
    data(){
        return{
           completed,
           radar
        }
    },

    methods: {
        createChart(chartId, chartData){
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options
            })
        }
    },
    mounted() {
        this.createChart('completed', this.completed)
        this.createChart('radar', this.radar)
    }
}
</script>


<style>

</style>
