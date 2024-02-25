<template>
    <div class="wrapper">
        <div class="inputFieldsLeft">
            <panel title="Song Metadata">
                <v-text-field
                    :rules="[required]"
                    label="Title"
                    v-model="song.title"
                />
                <v-text-field
                    :rules="[required]"
                    label="Artist"
                    v-model="song.artist"
                />
                <v-text-field
                    :rules="[required]"
                    label="Genre"
                    v-model="song.genre"
                />
                <v-text-field
                    :rules="[required]"
                    label="Album"
                    v-model="song.album"
                />
                <v-text-field
                    :rules="[required]"
                    label="Album Image Url"
                    v-model="song.albumImageUrl"
                />
                <v-text-field
                    :rules="[required]"
                    label="YouTubeID"
                    v-model="song.youtubeId"
                />
            </panel>
        </div>
        <div class="inputFieldsRight">
            <panel title="Song Structure">
                <v-textarea
                    :rules="[required]"
                    label="Lyrics"
                    counter
                    v-model="song.lyrics"
                />
                <v-textarea
                    :rules="[required]"
                    label="Tab"
                    counter
                    v-model="song.tab"
                />
            </panel>
            <v-btn @click="create" class="mt-2">Create Song</v-btn>
        </div>
    </div>
</template>

<script>
import Panel from "@/components/Panel.vue";
import SongsService from "@/services/SongsService";

export default {
    components: {
        Panel,
    },
    methods: {
        async create() {
            try {
                await SongsService.post(this.song);
                this.$router.push({
                    name: "songs",
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    data() {
        return {
            required(v) {
                return !!v || "Field is required";
            },
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null,
            },
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
    display: flex;
    flex-direction: column;
}
.wrapper {
    display: flex;
}
</style>
