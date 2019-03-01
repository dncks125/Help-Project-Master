<template>


    <router-view></router-view>



</template>

<script>
  import asd from './components/asd'
  export default {
    name: 'App'
    ,components:{
      'asd':asd
    }
  }
</script>

<style>
  #maincontent{
    margin-left: 200px;
  }
</style>
