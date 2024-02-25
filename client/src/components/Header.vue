<template>
    <v-toolbar fixed>
        <v-btn to="/">
            <v-toolbar-title class="mr-4"> TabTracker </v-toolbar-title>
        </v-btn>
        <v-toolbar-items>
            <!-- <v-btn>Browse</v-btn> -->
            <v-btn to="login" v-if="!userLoggedIn"> Log In </v-btn>
            <v-btn to="register" v-if="!userLoggedIn"> Sign Up </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
import store from "@/store";

export default {
    computed: {
        userLoggedIn() {
            return store.state.isUserLoggedIn;
        },
    },
};
</script>
<style scoped></style>
