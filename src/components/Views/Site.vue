<template>
    <div>Aqui será a a home</div>
    <button @click="navegarPara()">Login</button>
</template>
<script>
/* eslint-disable */
export default{
    name: 'Site',
    methods:{
        navegarPara(){
            this.$router.push('/Login')
        }
    }
    
}
</script>