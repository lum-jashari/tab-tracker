<template>
    <v-btn @click="check">test</v-btn>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
    data() {
        return {
            song: null,
        };
    },
    methods: {
        check() {
            console.log(this.$router.currentRoute.value.params.songId);
        },
    },
    async mounted() {
        const songId = this.$router.currentRoute.value.params.songId;
        this.song = await SongsService.show(songId);
    },
};
</script>

<style scoped></style>
