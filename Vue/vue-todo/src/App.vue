<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :propsData="todoArr"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFoorter from '@/components/TodoFoorter.vue';

export default {
  data(){
    return{
      todoArr : []
    }
  },
  methods: {
    addTodo(addtodoItem){
      let obj = { completed: false, item: addtodoItem };
      // JSON.stringify = > js obj를 string으로 변환해주는 API
      // 해당 API를 사용해야 Aplication에서 value 값을 확인 할 수 있음.
      // 미사용시 [object, object]형태로 보임
      localStorage.setItem(addtodoItem, JSON.stringify(obj));
    }
  },  
  //인스턴스가 생성되면 실행되는 라이프 사이클, 1번만 실행됨
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList": TodoList,
    "TodoFooter": TodoFoorter,
  },
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
}

input {
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.03);
}
</style>
