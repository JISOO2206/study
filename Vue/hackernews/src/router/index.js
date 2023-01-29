import { createWebHashHistory, createRouter } from "vue-router";
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import NewsView from '@/views/NewsView.vue'

const routes = [
  {
    // url 경로
    path : "/askView",
    // 해당 경로로 연결할 때 사용할 선택적 이름
    // (근데 아직 용도에 대해서 감이 안 잡힘...)
    name : "AskView",
    // 해당 경로로 호출할 때 로드되는 구성요소
    component : AskView
  },
  {
    path : "/jobsView",
    name : "JobsView",
    component : JobsView
  },
  {
    path : "/newsView",
    name : "NewsView",
    component : NewsView
  }
];

const router = createRouter({
  history : createWebHashHistory(),
  routes
});

export default router;