<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <panel title="Register">
                <form name="tab-tracker-form" autocomplete="off">
                    <v-text-field label="email" v-model="email"></v-text-field>
                    <br />
                    <v-text-field
                        label="password"
                        type="password"
                        v-model="password"
                        autocomplete="new-password"
                    ></v-text-field>
                    <br />
                    <v-alert
                        class="mb-2"
                        v-if="error"
                        type="error"
                        title="Error!"
                        :text="error"
                    ></v-alert>
                    <v-btn color="black" @click="register">Register</v-btn>
                </form>
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
        async register() {
            try {
                const response = await AuthenticationService.register({
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
.wrapper {
    margin: auto;
    min-width: 50%;
}
</style>
