<template>
    <panel title="Song Metadata" class="song">
        <v-layout>
            <div class="w-50 songDetails">
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
                        name: 'songs-edit',
                        params() {
                            return { songId: song.id };
                        },
                    }"
                    >Edit</v-btn
                >
            </div>
            <div class="d-flex w-50 album">
                <img
                    class="album-image"
                    :src="song.albumImageUrl"
                    :alt="song.album"
                />
                {{ song.album }}
            </div>
        </v-layout>
    </panel>
</template>

<script>
export default {
    props: ["song"],
};
</script>

<style scoped>
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
.album {
    flex-direction: column;
    align-items: center;
    font-size: small;
}
</style>
