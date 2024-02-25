<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <panel title="Songs">
                <div v-for="song in songs" :key="song.id">
                    {{ song.title }} - {{ song.artist }} -
                    {{ song.album }}
                </div>
            </panel>
        </div>
    </v-layout>
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
            songs: null,
        };
    },
    async mounted() {
        // TODO: request to backend for all songs
        this.songs = (await SongsService.index()).data;
    },
};
</script>

<style scoped>
.wrapper {
    margin: auto;
    min-width: 80%;
}
</style>
