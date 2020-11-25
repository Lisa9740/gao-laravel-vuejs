import Axios from "axios";
import AddAttribution from './add-attribution.vue'

export default {
    components: { AddAttribution },
    props: {
        computer: {
            default: function () {
                return {}
            },
        }
    },
    data() {
        return {
            hours: [],
            attributions: [],
            attrComputer: '',
            attrHour: '',

        }
    },
    methods: {
        sendInfo(computer, hour) {
          this.attrComputer = computer;
          this.attrhour = hour;
        },
        initialize() {
            Axios.get('/api/attributions').then(response => {
                let response_data =  response.data.data
                response_data.forEach( data => {
                    this.attributions.push({
                        'computer' : data.computer,
                        'hour' : data.hour,
                        'name' : data.customer_id.firstname + ' '+ data.customer_id.lastname,
                        'date' : data.date
                    })
                })
            })
            console.log(this.attributions)
        },
        displayHours() {
            for( let i=8; i<19; i++){
                this.hours.push(i)
            }
        },

    },
    created() {
        this.initialize();
        this.displayHours();
    }
}

