import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";

import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import 'element-plus/theme-chalk/index.css'

import "./assets/css/setting.scss"
import "./assets/css/global.scss"

import { i18n } from './i18n';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus, { size: "small" });
app.use(i18n);

app.mount('#app')

export default app;
