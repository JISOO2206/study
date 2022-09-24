<template>
  <div>
    <transition-group class="listBox" name="list" tag="ul">
      <li class="listItem shadow" v-for="(todoItem,index) in this.$store.state.todoItems" v-bind:key="index">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"
          @click="toggleComplete(todoItem, index)">
          <i class="fa-solid fa-check"></i>
        </span>
        <span class="todoContent" v-bind:class="{todoCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <button class="deleteBtn" @click="deleteTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can fa-lg"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
    deleteTodo(todoItem, index){
      // this.$emit('removeTodoItem', todoItem, index);
      this.$store.commit('deleteTodo', todoItem, index);
    },
    toggleComplete(todoItem, index){
      this.$emit('toggleItem', todoItem, index);
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

/*
  리스트 아이템 트랜지션 효과
*/

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}

</style>