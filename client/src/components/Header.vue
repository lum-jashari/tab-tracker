<template>
    <v-toolbar fixed>
        <v-btn to="/">
            <v-toolbar-title class="mr-4"> TabTracker </v-toolbar-title>
        </v-btn>
        <v-toolbar-items>
            <v-btn to="songs"> Browse </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <!-- <v-btn>Browse</v-btn> -->
            <v-btn to="login" v-if="!userLoggedIn"> Log In </v-btn>
            <v-btn to="register" v-if="!userLoggedIn"> Sign Up </v-btn>
            <v-btn @click="logout" v-if="userLoggedIn"> Log Out </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
import store from "@/store";
import { useRouter } from "vue-router";

// const router = useRouter();

export default {
    methods: {
        logout() {
            store.dispatch("setToken", null);
            store.dispatch("setUser", null);
            this.$router.push({ name: "root" });
        },
    },
    computed: {
        userLoggedIn() {
            return store.state.isUserLoggedIn;
        },
    },
};
</script>
<style scoped></style>
