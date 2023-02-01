import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import {BootstrapVue3} from 'bootstrap-vue-3';
import { url } from '../src/client_config/config';




// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);
app.use(router);

// Make BootstrapVue available throughout your project
app.use(BootstrapVue3);

// Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin);
app.config.globalProperties.axios=axios;
app.mount('#app');
