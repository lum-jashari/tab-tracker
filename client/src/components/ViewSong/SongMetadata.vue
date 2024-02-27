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
                <div>
                    <v-btn
                        class="mt-2"
                        @click="bookmark"
                        color="red"
                        v-if="isUserLoggedIn && !isBookmarked"
                        >Bookmark</v-btn
                    >
                    <v-btn
                        class="mt-2"
                        @click="unBookmark"
                        color="red"
                        v-if="isUserLoggedIn && isBookmarked"
                        >UnBookmark</v-btn
                    >
                </div>
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
import store from "@/store";
import BookmarksService from "@/services/BookmarksService";

export default {
    data() {
        return {
            isBookmarked: false,
        };
    },
    props: ["song"],
    computed: {
        isUserLoggedIn() {
            return store.state.isUserLoggedIn;
        },
    },
    async mounted() {
        if (!this.isUserLoggedIn) {
            return;
        }
        try {
            const bookmark = (
                await BookmarksService.index({
                    songId: this.$route.params.songId,
                    userId: store.state.user.id,
                })
            ).data;
            this.isBookmarked = !!bookmark;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async bookmark() {
            try {
                await BookmarksService.post({
                    songId: this.$route.params.songId,
                    userId: store.state.user.id.toString(),
                });
            } catch (error) {
                console.log(error);
            }
        },
        async unBookmark() {
            try {
                await BookmarksService.delete(this.$route.params.songId);
            } catch (error) {
                console.log(error);
            }
        },
    },
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
