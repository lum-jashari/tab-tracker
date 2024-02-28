<template>
    <panel title="Bookmarks">
        <v-data-table
            :headers="headers"
            :items="bookmarks"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </panel>
</template>

<script>
import store from "@/store";
import BookmarksService from "@/services/BookmarksService";

export default {
    data() {
        return {
            headers: [
                { text: "Title", value: "title" },
                { text: "Artist", value: "artist" },
            ],
            bookmarks: [],
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
                await BookmarksService.index({
                    userId: this.user.id.toString(),
                })
            ).data;

            this.bookmarks.push({
                title: response[0].Song.title,
                artist: response[0].Song.artist,
            });
        }
    },
};
</script>

<style scoped></style>
