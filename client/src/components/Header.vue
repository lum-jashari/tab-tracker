<template>
    <v-toolbar>
        <div>
            <v-btn to="/">
                <v-toolbar-title class="mr-4"> TabTracker </v-toolbar-title>
            </v-btn>
            <v-btn to="/songs"> Browse </v-btn>
        </div>
        <div>
            <v-btn to="/login" v-if="!userLoggedIn"> Log In </v-btn>
            <v-btn to="/register" v-if="!userLoggedIn"> Sign Up </v-btn>
            <v-btn @click="logout" v-if="userLoggedIn"> Log Out </v-btn>
        </div>
    </v-toolbar>
</template>
<script>
import store from "@/store";

export default {
    methods: {
        logout() {
            store.dispatch("setToken", null);
            store.dispatch("setUser", null);
            this.$router.push({ name: "songs" });
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
