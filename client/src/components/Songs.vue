<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <panel title="Songs">
                <div v-for="song in songs" :key="song.title">
                    {{ song.title }} - {{ song.artist }} -
                    {{ song.album }}
                </div>
            </panel>
        </div>
    </v-layout>
</template>

<script>
import Panel from "@/components/Panel.vue";

export default {
    data() {
        return {
            songs: [
                {
                    title: "feel no ways",
                    artist: "drake",
                    album: "views",
                },
            ],
        };
    },
    components: {
        Panel,
    },
};
</script>

<style scoped>
.wrapper {
    margin: auto;
    min-width: 80%;
}
</style>
