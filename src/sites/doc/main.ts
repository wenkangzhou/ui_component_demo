import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';
import { Hover } from './directive/hover/hover';

import { isMobile } from '@/sites/assets/util';

if (isMobile) {
  // mobile 案例页面
  location.replace('demo.html' + location.hash);
}

createApp(App)
  .directive('hover', Hover)
  .use(router)
  .mount('#doc');
