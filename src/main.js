import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import vuesetComponents from 'vueset-component';
import "../dist/style.css";

const app = createApp(App);


app.use(vuesetComponents);

app.mount('#app');
