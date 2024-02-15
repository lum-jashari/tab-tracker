<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Log in</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field label="email" v-model="email"></v-text-field>
                    <br />
                    <v-text-field
                        label="password"
                        v-model="password"
                        type="password"
                    ></v-text-field>
                    <br />
                    <div class="error" v-html="error"></div>
                    <br />
                    <v-btn class="cyan" @click="login">Log In</v-btn>
                </div>
            </div>
        </div>
    </v-layout>
    <div></div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: null,
        };
    },
    methods: {
        async login() {
            try {
                await AuthenticationService.login({
                    email: this.email,
                    password: this.password,
                });
                // this.$store.dispatch("setToken", response.data.token);
                // this.$store.dispatch("setUser", response.data.user);
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },
};
</script>

<style scoped>
.error {
    color: red;
}
.wrapper {
    margin: auto;
    min-width: 50%;
}
</style>
