<template>
    <div class="wrapper">
        <div class="inputFieldsLeft">
            <panel title="Song Metadata">
                <v-text-field label="Title" v-model="title" />
                <v-text-field label="Artist" v-model="artist" />
                <v-text-field label="Genre" v-model="genre" />
                <v-text-field label="Album" v-model="album" />
                <v-text-field label="Album Image Url" v-model="albumImageUrl" />
                <v-text-field label="YouTubeID" v-model="youtubeId" />
            </panel>
        </div>
        <div class="inputFieldsRight">
            <panel title="Song Structure">
                <v-textarea label="Lyrics" counter v-model="lyrics" />
                <v-textarea label="Tab" counter v-model="tab" />
            </panel>
        </div>
    </div>
</template>

<script>
import Panel from "@/components/Panel.vue";
export default {
    components: {
        Panel,
    },
    data() {
        return {
            title: null,
            artist: null,
            genre: null,
            album: null,
            albumImageUrl: null,
            youtubeId: null,
            lyrics: null,
            tab: null,
        };
    },
};
</script>

<style scoped>
.inputFieldsLeft {
    width: 30%;
}
.inputFieldsRight {
    width: 70%;
    margin-left: 1em;
}
.wrapper {
    display: flex;
}
</style>
