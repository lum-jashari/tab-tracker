<template>
    <div class="wrapper">
        <div class="leftPanel">
            <song-metadata :song="song" />
        </div>
        <div class="rightPanel">
            <you-tube :youtubeId="song.youtubeId" />
        </div>
    </div>
    <div class="wrapper">
        <div class="leftPanel">
            <tab :song="song" />
        </div>
        <div class="rightPanel">
            <lyrics :song="song" />
        </div>
    </div>
</template>

<script>
import Panel from "@/components/Panel.vue";
import SongMetadata from "@/components/ViewSong/SongMetadata.vue";
import Lyrics from "@/components/ViewSong/Lyrics.vue";
import Tab from "@/components/ViewSong/Tab.vue";
import YouTube from "@/components/ViewSong/YouTube.vue";

import SongsService from "@/services/SongsService";

export default {
    components: {
        Panel,
        SongMetadata,
        YouTube,
        Lyrics,
        Tab,
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
    margin: auto;
    min-width: 80%;
    display: flex;
}
</style>
