import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { sync } from "vuex-router-sync";
import { createStore } from "vuex";

// const store = createStore({
//     strict: true,
//     state: {
//         token: null,
//         user: null,
//         //    isUserLoggedIn: false,
//     },
//     mutations: {
//         setToken(state, token) {
//             state.token = token;
//         },
//         setUser(state, user) {
//             state.user = user;
//         },
//     },
//     actions: {
//         setToken({ commit }, token) {
//             commit("setToken", token);
//         },
//         setUser({ commit }, user) {
//             commit("setUser", user);
//         },
//     },
// });
// app.use(store);
// sync(store, router);

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount("#app");

export default { store };
