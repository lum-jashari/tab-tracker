import { createRouter, createWebHistory } from "vue-router";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Hello from "@/components/Hello.vue";
import Songs from "@/components/Songs.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "root",
            component: Hello,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/songs",
            name: "songs",
            component: Songs,
        },
    ],
});

export default router;
