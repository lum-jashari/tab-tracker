import { createRouter, createWebHistory } from "vue-router";
import Hello from "../views/Hello.vue";
import Register from "../views/Register.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "hello",
            component: Hello,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
    ],
});

export default router;
