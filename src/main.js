import { createApp } from 'vue';
import './assets/scss/main.css';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './common/fontAwesome';
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
