import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "./router";
import store from "./store";

import Panel from "@/components/globals/Panel.vue";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(router).use(vuetify).use(store).component("panel", Panel).mount("#app");
