<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.title" >{{ user.title }}</div>
  </div>
</template>

<script>
//import { fetchNewsList } from '@/api/index.js'


export default {
  data(){
    return {
    }
  },
  created(){
  }
}
</script>

<style>

</style>