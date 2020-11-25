import Axios from "axios";
import Computer from "./computer.vue";
import AddComputer from './add-computer.vue';
import DatePicker from './datepicker.vue';
import AddAttribution from './add-attribution';

export default {
    components: {Computer, AddComputer, DatePicker},
    data() {
        return {
            computers: [],
            isModalVisible: false,
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        getCreatedElement(data){
            this.computers = data.data;
            this.isModalVisible = false;
        },
        getComputers() {
            Axios.get('/api/computers').then(response => {
                 console.log(response.data)
                 this.computers = response.data
            })
        },
    },
    created() {
            this.getComputers();
    }
}

