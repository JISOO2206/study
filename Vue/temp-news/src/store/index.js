import Vue from 'vue'; //Vue 라이브러리를 불러오도록 임포트함.
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되기 때문에 이렇게 사용한다.

export const store = new Vuex.Store({
  state: { // 상태 : 사용하는 이유는 컴포넌트의 깊이가 깊어졌을 때 컴포넌트 간의 데이터를 쉽게 조작하기 위해서
    news : []
  },
  mutations : { // state에 넣어주기 위해서 거쳐야 함. veux 구조상 해야 하는 것.
    SET_NEWS(state, data){ //mutations의 첫번째 인자는 state임. 아래 코드를 실행하면서 데이터를 넘겨주게 되는 것.
      state.news = data; 
    }
  },
  actions : { // api를 호출하기 위한 용도
    FETCH_NEWS(context){
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data); // 해당코드로 mutation에 데이터를 넘길 수 있음.
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})