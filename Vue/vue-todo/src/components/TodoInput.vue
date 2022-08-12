<template>
  <div class="inputBox">
    <input class="todoInput" type="text" @keyup="addTodo" v-model="newTodo">
    <div class="addContainer">
      <button class="addBtn" @click="addTodo">ADD</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newTodo : ''
    }
  },
  methods : {
    addTodo(){
      localStorage.setItem(this.newTodo, this.newTodo);
      this.clearInput();
    },
    clearInput(){
      this.newTodo = '';
    }
  }
}
</script>
<style scoped>

  .todoInput:focus{
    outline: none;
  }
  .todoInput{
    border-style: none;
    font-size: 0.9rem;
  }
  .inputBox{
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    width: 400px;
  }
  .addContainer{
    float: right;
    background-color: lightblue;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: black;
    font-weight: 400;
    padding: auto;
    vertical-align: middle;
    background: none;
    border: none;
  }
  .addBtn:hover{
    cursor: pointer;
  }
</style>