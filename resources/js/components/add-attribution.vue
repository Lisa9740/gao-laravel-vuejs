<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    +
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">
                 Ajouter Attribution
                </v-card-title>
                <v-card-text>
                    {{ hourAttr }} {{ computerAttr }}
                    <label for="name">Nom de l'utilisateur</label>
                    <v-autocomplete
                        :items="customers"
                        item-text="name"
                        :search-input.sync="search"
                        dense
                        filled
                        rounded
                        return-object
                        v-model="name"
                    ></v-autocomplete>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >Ajouter
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import Axios from "axios";
export default {
    props: ['hourAttr', 'computerAttr'],
    data () {
        return{
            dialog: false,
            customers: [],
            computer: null,
            name:'',
            hour: null,
            search: '',
            isSearching: false
        }
    },
    watch: {
        search(val) {
            if (val && val.length >= 3){
                this.isSearching = true
                Axios.get('/api/customer/search',  {
                    params: {
                        query : val
                    }
                }).then(response => {
                    this.customers = response.data.data
                })
                console.log("customer", this.customers)
            }
        },
    },
    methods: {
        // attribute: function (computer, hour) {
        //    this.computer = computer
        //     this.hour = hour
        //     console.log(computer, hour)
        // }
    },

}
</script>
