<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearTodoList'
    })
  },
}
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: tomato;
  display: block;
}
.clearAllBtn:hover{
  cursor: pointer;
}
</style>