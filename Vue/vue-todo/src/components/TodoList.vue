<template>
  <div>
    <ul class="listBox">
      <li class="listItem shadow" v-for="(todoItem,index) in propsData" v-bind:key="index">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem)">
          <i class="fa-solid fa-check"></i>
        </span>
        <span class="todoContent" v-bind:class="{todoCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <button class="deleteBtn" @click="deleteTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can fa-lg"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
  data(){
    return{
    }
  },
  methods: {
    deleteTodo(todoItem, index){
      this.$emit('removeTodoItem', todoItem, index);
    },
    toggleComplete(todoItem){
      todoItem.completed = !todoItem.completed;
      //로컬 스토리지의 데이터를 갱신해야 할까?
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
}
</script>

<style scoped>


.listBox{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
.listItem{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  background: white;
  border-radius: 5px;
}
.listItem .todoContent{
  display: block;
  padding-left: 20px;
  width: 75%;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  display: block;
  padding-left: 20px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.deleteBtn{
  margin: auto;
  color: tomato;
  border: none;
  background: none;
}
.todoCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
</style>