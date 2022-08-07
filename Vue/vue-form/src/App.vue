<template>
  <!-- 바닐라 js로 새고를 막던 것을 vue에서는 이벤트명.prevent로 막을 수 있다 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="userName">id : </label>
      <input id="userName" type="text" v-model="userName" />
    </div>
    <div>
      <label for="password">password : </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return {
      userName : '',
      password : ''
    }
  },
  methods: {
    submitForm(){
      //sub으로 인한 새로고침을 막아주는 이벤트(바닐라 자바스크립트)
      // event.preventDefault();
      let url = 'https://jsonplaceholder.typicode.com/users';
      let data = {
        userName: this.userName,
        password : this.password
      }
      axios.post(url, data)
        .then(function (responese) {
          console.log(responese)
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }
}
</script>

<style>

</style>