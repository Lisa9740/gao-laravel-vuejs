import Axios from "axios";
import Computer from "./computer.vue";
import AddComputer from './add-computer.vue';

export default {
    components: {Computer, AddComputer},
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
                // this.computer = response.data
                response.data.forEach(_data => {
                    this.computers.push(_data)
                })
            })
        },

    },
    created() {
            this.getComputers();
    }
}

