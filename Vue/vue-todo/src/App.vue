<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFoorter from '@/components/TodoFoorter.vue';

export default {
  name: 'App',
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList": TodoList,
    "TodoFooter": TodoFoorter,
}
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
