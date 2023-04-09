import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = VueRouter({
  routes: [
    {
      // path : url 주소
      path: '/news',
      // path : url 주소로 갔을 때 표시될 컴포넌트
      comments: NewsView
    },
    {
      path: '/ask',
      comments: AskView
    },
    {
      path: 'jobs',
      comments: JobsView
    }
  ]
});

