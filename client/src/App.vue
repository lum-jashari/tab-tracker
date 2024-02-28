<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <v-app>
        <page-header />
        <v-container fluid>
            <RouterView />
        </v-container>
    </v-app>
</template>

<style scoped></style>

<script>
import PageHeader from "@/components/Header.vue";
export default {
    components: {
        PageHeader,
    },
};
</script>
