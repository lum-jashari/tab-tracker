<template>
    <panel title="Songs">
        <router-link
            :to="{ name: 'songs-create' }"
            class="d-flex w-100 justify-end"
        >
            <v-btn
                class="font-weight-black text-h5 d-flex"
                color="black"
                slot="action"
            >
                +
            </v-btn>
        </router-link>
        <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
                <div class="w-50 songDetails">
                    <pre>{{ song.id }}</pre>
                    <br />
                    <div class="song-title">
                        {{ song.title }}
                    </div>
                    <div class="song-artist">
                        {{ song.artist }}
                    </div>
                    <div class="song-genre">
                        {{ song.genre }}
                    </div>
                    <v-btn
                        class="mt-2"
                        :to="{
                            name: 'song',
                            params: { songId: song.id },
                        }"
                        >View</v-btn
                    >
                </div>
                <div class="d-flex w-50">
                    <img class="album-image" :src="song.albumImageUrl" alt="" />
                </div>
            </v-layout>
        </div>
    </panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
    data() {
        return {
            songs: null,
        };
    },
    watch: {
        "$route.query.search": {
            immediate: true,
            async handler(value) {
                this.songs = (await SongsService.index(value)).data;
            },
        },
    },
};
</script>

<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
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
