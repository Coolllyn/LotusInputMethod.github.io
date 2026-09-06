import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/shared.css';

import { Icon } from '@iconify/vue';

const app = createApp(App);
app.component('v-icon', Icon);
app.use(router);
app.mount('#app');
