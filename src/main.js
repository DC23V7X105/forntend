// gọi các thư viện cần thiết
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router"; // gọi route

createApp(App).use(router).mount("#app");
