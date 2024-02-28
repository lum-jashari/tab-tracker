<template>
    <panel title="Recently Viewed">
        <v-data-table
            :headers="headers"
            :items="songs"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </panel>
</template>

<script>
import store from "@/store";
import SongHistoryService from "@/services/SongHistoryService";

export default {
    data() {
        return {
            headers: [
                { text: "Title", value: "title" },
                { text: "Artist", value: "artist" },
            ],
            songs: [],
        };
    },
    computed: {
        isUserLoggedIn() {
            return store.state.isUserLoggedIn;
        },
        user() {
            return store.state.user;
        },
    },
    async mounted() {
        if (this.isUserLoggedIn) {
            const response = (
                await SongHistoryService.index({
                    userId: this.user.id.toString(),
                })
            ).data;

            response.forEach((element) => {
                this.songs.push({
                    title: element.Song.title,
                    artist: element.Song.artist,
                    createdAt: element.createdAt,
                });
            });
        }
    },
};
</script>

<style scoped></style>
