Vue.createApp({
    data () {
        return {
            hidden: true,
            hiddenMessage: true,
            exception: "Out of application"
        }
    },
    methods: {
        changeHidden() {
            //this.hidden = !this.hidden You are here if you red readme
            alert('Not yet')
        },
        changeMessage(){
            this.hiddenMessage = !this.hiddenMessage
        },
        consoleException(){
            console.log(this.message)
        },
        sendMessage(){
            alert('Not yet')
            /*axios.post('', {
                
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })*/
        }
    }
}).mount("#start-func")