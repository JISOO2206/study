<template>
  <div>
    <div v-for="ask in asks" v-bind:key="ask.title">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAsksList } from '@/api/index.js'

export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    let vm = this;
    fetchAsksList().then(function (response) {
      vm.asks = response.data;
    })
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<style></style>