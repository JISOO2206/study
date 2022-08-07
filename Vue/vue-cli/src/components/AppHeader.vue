<template>
  <header>
    <h1>{{propsData}}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>
<script>
export default {
  props: ['propsData'],
  methods: {
    sendEvent(){
      this.$emit('renew');
    }
  },
}
</script>
<style>
  
</style>