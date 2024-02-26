<template>
    <panel title="Song Metadata">
        <div>
            {{ song.title }}
            {{ song.artist }}
            {{ song.genre }}
        </div>
    </panel>
</template>

<script>
import Panel from "@/components/Panel.vue";
import SongsService from "@/services/SongsService";

export default {
    components: {
        Panel,
    },
    data() {
        return {
            song: {},
        };
    },
    methods: {
        check() {
            console.log(this.song);
        },
    },
    async mounted() {
        const songId = this.$router.currentRoute.value.params.songId;
        this.song = (await SongsService.show(songId)).data;
    },
};
</script>

<style scoped></style>
