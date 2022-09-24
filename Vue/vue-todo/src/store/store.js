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
  mutations : {
    addTodo(state, addtodoItem){
      const obj = { completed: false, item: addtodoItem };
      localStorage.setItem(addtodoItem, JSON.stringify(obj));
      // this.todoArr.push(obj);
      state.todoItems.push(obj);
    }
  }
});