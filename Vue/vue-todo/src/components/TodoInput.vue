<template>
  <div class="inputBox">
    <input class="todoInput" type="text" @keyup.enter="addTodo" v-model="newTodo">
    <div class="addContainer">
      <button class="addBtn" @click="addTodo">
        <i class="fa-solid fa-plus fa-lg"></i>
      </button>
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
      if(this.newTodo !== ''){
        let obj = {completed : false, item: this.newTodo};
        // JSON.stringify = > js obj를 string으로 변환해주는 API
        // 해당 API를 사용해야 Aplication에서 value 값을 확인 할 수 있음.
        // 미사용시 [object, object]형태로 보임
        localStorage.setItem(this.newTodo, JSON.stringify(obj));
        this.clearInput();
      }
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