<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList :propsData="todoArr">
    </TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFoorter.vue';

export default {
  data(){
    return{
      todoArr : []
    }
  },
  methods: { // mutations와 같은 역할을 함.
  },  
  //인스턴스가 생성되면 실행되는 라이프 사이클, 1번만 실행됨
  created() {
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
