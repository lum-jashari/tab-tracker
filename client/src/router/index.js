import { createRouter, createWebHistory } from "vue-router";
import Register from "@/components/Register.vue";
import Hello from "@/components/Hello.vue";

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
