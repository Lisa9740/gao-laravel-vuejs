import Axios from "axios";
export default {
    name: 'modal',
    data() {
        return{
            name: '',

        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        create() {
            Axios.post('api/computer/create', {
                name : this.name,
            }).then(response => {
                this.$emit('createElement', response)

            })

        },
    }
}
