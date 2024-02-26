<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <panel title="Login">
                <v-text-field label="email" v-model="email"></v-text-field>
                <br />
                <v-text-field
                    label="password"
                    v-model="password"
                    type="password"
                ></v-text-field>
                <br />
                <v-alert
                    class="mb-2"
                    v-if="error"
                    type="error"
                    title="Error!"
                    :text="error"
                ></v-alert>
                <!-- <div class="error" v-html="error"></div>
                <br /> -->
                <v-btn color="black" @click="login">Log In</v-btn>
            </panel>
        </div>
    </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import store from "../store";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: null,
        };
    },
    methods: {
        testIfWorked() {
            console.log(store.state.user);
            console.log(store.state.token);
        },
        async login() {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password,
                });
                store.dispatch("setToken", response.data.token);
                store.dispatch("setUser", response.data.user);
                this.$router.push({
                    name: "songs",
                });
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
