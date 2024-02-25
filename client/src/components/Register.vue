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
                    <div class="error" v-html="error"></div>
                    <br />
                    <v-btn class="cyan" @click="register">Register</v-btn>
                </form>
            </panel>
        </div>
    </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import store from "../store";
import Panel from "@/components/Panel.vue";

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
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },
    components: {
        Panel,
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
