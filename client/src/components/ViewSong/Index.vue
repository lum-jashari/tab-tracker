<template>
    <div class="wrapper">
        <div class="leftPanel">
            <song-metadata :song="song" />
        </div>
        <div class="rightPanel">
            <you-tube :youtubeId="song.youtubeId" />
        </div>
    </div>
</template>

<script>
import Panel from "@/components/Panel.vue";
import SongMetadata from "@/components/ViewSong/SongMetadata.vue";
import YouTube from "@/components/ViewSong/YouTube.vue";

import SongsService from "@/services/SongsService";

export default {
    components: {
        Panel,
        SongMetadata,
        YouTube,
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

<style scoped>
.leftPanel {
    width: 50%;
}
.rightPanel {
    width: 50%;
    display: flex;
    flex-direction: column;
}
.wrapper {
    display: flex;
}
.wrapper {
    margin: auto;
    min-width: 80%;
}
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 24px;
}
.song-genre {
    font-size: 18px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
    border-radius: 0.5em;
}
.songDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.album {
    flex-direction: column;
    align-items: center;
}
textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
