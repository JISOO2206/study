import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state : {
    headerText : 'TODO it!',
    todoItems : storage.fetch()
  },
  getters : {
    stroredTodoItems(state){
      return state.todoItems;
    }
  },
  mutations : {
    addTodo(state, addtodoItem){
      const obj = { completed: false, item: addtodoItem };
      localStorage.setItem(addtodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    deleteTodo(state, todoObj){
      // 32번줄만 정작동하고, 31번줄은 작동안 함...
      localStorage.removeItem(todoObj.todoItem.item);
      state.todoItems.splice(todoObj.index, 1);
    },
    toggleItem(state, todoObj){
      state.todoItems[todoObj.index].completed = !state.todoItems[todoObj.index].completed;
      localStorage.removeItem(todoObj.todoItem.item);
      localStorage.setItem(todoObj.todoItem.item, JSON.stringify(todoObj.todoItem));
    },
    clearTodoList(state){
      localStorage.clear();
      state.todoItems = [];
    }
  }
});