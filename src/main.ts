import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import route from "./router";
import "element-plus/dist/index.css";

createApp(App).use(route).mount("#app");
