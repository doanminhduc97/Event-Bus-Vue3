import { createApp } from 'vue';
import App from './App.vue';
import store from './store'
import mitt from 'mitt';
// import Bus from './components/bus'

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store)
// app.use(Bus)
app.mount('#app');
