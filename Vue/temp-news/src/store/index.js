import Vue from 'vue'; //Vue 라이브러리를 불러오도록 임포트함.
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되기 때문에 이렇게 사용한다.

export const store = new Vuex.Store({
  state: { // 상태 : 사용하는 이유는 컴포넌트의 깊이가 깊어졌을 때 컴포넌트 간의 데이터를 쉽게 조작하기 위해서
    news : []
  },
  actions : {
    FETCH_NEWS(){
      fetchNewsList()
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})