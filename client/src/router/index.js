import { createRouter, createWebHistory } from "vue-router";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Hello from "@/components/Hello.vue";
import Songs from "@/components/Songs.vue";
import CreateSongs from "@/components/CreateSongs.vue";
import EditSongs from "@/components/EditSongs.vue";
import ViewSong from "@/components/ViewSong/Index.vue";

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
        {
            path: "/song/:songId",
            name: "song",
            component: ViewSong,
        },
        {
            path: "/songs/create",
            name: "songs-create",
            component: CreateSongs,
        },
        {
            path: "/song/:songId/edit",
            name: "songs-edit",
            component: EditSongs,
        },
    ],
});

export default router;
