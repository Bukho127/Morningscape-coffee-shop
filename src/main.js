import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(faAngleDown, faAngleRight);
const app = createApp(App);

app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

app.mount("#app");
