<template>
    <div class="card">
        <div class="card-header" >
            {{ computer.name }}
        </div>
        <div class="card-body">
            <div v-for="hour in hours">
               <v-row>
                   <v-col>
                           {{hour}} h
                   </v-col>
                   <v-col>

                   </v-col>
                   <v-col>

                            <AddAttribution :hourAttr="hour" :computerAttr="computer"/>

                   </v-col>
               </v-row>

            </div>
        </div>
    </div>
</template>
<script src="./computer.js"></script>
