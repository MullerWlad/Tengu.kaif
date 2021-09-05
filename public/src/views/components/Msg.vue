<template lang="pug">
    .display-horison-start
        include ../../pug/components/message
</template>

<script>
    export default{
        props: ['messages']
    }
</script>

<style scoped>
    .block{
        background: red
    }
</style>