import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import JLGLUI from '@/jlglui';
import '@/sites/assets/styles/reset.scss';
import '@/utils/touchEmulator';
createApp(App)
    .use(router)
    .use(JLGLUI)
    .mount('#app');
