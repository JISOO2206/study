<template>
  <div>
  <app-header v-bind:propsData="str"
              v-on:renew="renewStr"></app-header>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      str: 'HHeader'
    }
  },
  components:{
    'app-header' : AppHeader
  },
  methods: {
    renewStr(){
      this.str = 'hi';
    }
  },
}
</script>
<style>
  
</style>