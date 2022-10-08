<template>
  <div>
    <transition-group class="listBox" name="list" tag="ul">
      <li class="listItem shadow" v-for="(todoItem,index) in this.todoItems" v-bind:key="index">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"
          @click="toggleComplete({todoItem, index})">
          <i class="fa-solid fa-check"></i>
        </span>
        <span class="todoContent" v-bind:class="{todoCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <button class="deleteBtn" @click="deleteTodo({todoItem, index})">
          <i class="fa-solid fa-trash-can fa-lg"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  data(){
    return{
    }
  },
  methods: {
    ...mapMutations({
      // deleteTodo에 따로 인자를 선언하지 않아도 되는 이유는
      // 위 템플릿에서 deleteTodo에 있는 인자를 알아서 들고 가기 때문.
      deleteTodo: 'deleteTodo',
      toggleComplete : 'toggleItem'
    }),
    // deleteTodo(todoItem, index){
    //   // ES6 문법으로 변환하여 전달
    //   this.$store.commit('deleteTodo', { todoItem, index });
    // },
  },
  computed: {
    /**
     * 해당 부분은 vue에서 권고하는 가이드
     * template안에서는 JS 연산이라든지, 속성 조건을 최대한 줄이는 방법으로 
     * template을 깔끔하게 표현해야 함
     * 
     * 연산은 script 안에서 해야 한다.
     */
    todoItems() {
      return this.$store.getters.stroredTodoItems;
    }

    /**
     * ...mapGetters(['storedTodoItems'])로 사용하는 방법도 있음
     * 
     * mapGetters 안에 배열이 아닌 객체를 사용할 수 있음.
     * 객체로 사용할 때는 
     * {
     *  컴포넌트 변수 명 : 'storedTodoItems'
     * }
     * 으로 사용할 떄 사용한다.
     */
  }
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