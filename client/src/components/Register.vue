<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <h1>Register</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        v-model="email"
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="password"
                    />
                    <br />
                    <div class="error" v-html="error"></div>
                    <br />
                    <button @click="register">Register</button>
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
        async register() {
            try {
                console.log(this.email, this.password);
                await AuthenticationService.register({
                    email: this.email,
                    password: this.password,
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
</style>
