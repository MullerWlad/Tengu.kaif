<template lang="pug">
    .centred.workspace.top-50.display-vertical-around
        Msg(v-bind:messages="messages")
        Supp(v-bind:supp="supps")
</template>

<script>
    import Msg from '../components/Msg.vue'
    import Supp from '../components/Supp.vue'
    export default{
        components: {
            Msg, Supp
        },
        data(){
            return{
                messages: [],
                supps: []
            }
        },
        mounted(){
            fetch('../src/data/logs/data.json')
            .then(response => response.json())
            .then(json => {
                this.messages = json.messages,
                this.supps = json.supps
            })
        },
    }
</script>

<style scoped>

</style>