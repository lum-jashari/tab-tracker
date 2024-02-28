<template>
    <v-layout column>
        <div d-flex xs6 offset-xs3 class="wrapper mr-2" v-if="isUserLoggedIn">
            <songs-bookmarks />
            <recently-viewed-songs class="mt-2" />
        </div>
        <div d-flex xs6 offset-xs3 class="wrapper">
            <songs-search-panel />
            <songs-panel class="mt-2" />
        </div>
    </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel.vue";
import SongsSearchPanel from "./SongsSearchPanel.vue";
import RecentlyViewedSongs from "./RecentlyViewedSongs.vue";
import SongsBookmarks from "./SongsBookmarks.vue";
import SongsService from "@/services/SongsService";

import store from "@/store";

export default {
    components: {
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks,
        RecentlyViewedSongs,
    },
    computed: {
        isUserLoggedIn() {
            return store.state.isUserLoggedIn;
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
.wrapper {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}
</style>
