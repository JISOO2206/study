import { createApp } from 'vue'
import VueRouter from 'vue-router'

createApp.use(VueRouter)

const router = new VueRouter({
  routes : [
    {
      // path : url에 대한 정보가 담기는 곳.(url 주소)
      path : '',
      // component : url 주소로 갔을 때 표시될 컴포넌트
      component: ''
    },
    {
      path : '',
      component: ''
    },
    {
      path : '',
      component: ''
    },
  ]
})