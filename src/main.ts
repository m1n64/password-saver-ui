import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import "@/icons/index";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './index.css'
import "leaflet/dist/leaflet.css";

createApp(App)
    .use(store)
    .use(router)
    .use(Toast, {
        transition: "Vue-Toastification__bounce",
        maxToasts: 20,
        newestOnTop: true
    })
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
