<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <songs-search-panel />
            <songs-panel class="mt-2" />
        </div>
    </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel.vue";
import SongsSearchPanel from "./SongsSearchPanel.vue";
import SongsService from "@/services/SongsService";

export default {
    components: {
        SongsPanel,
        SongsSearchPanel,
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
    data() {
        return {
            songs: null,
        };
    },
    async mounted() {
        this.songs = (await SongsService.index()).data;
    },
};
</script>

<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
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
}
.songDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
