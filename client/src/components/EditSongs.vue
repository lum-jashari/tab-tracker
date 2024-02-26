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
            <v-alert
                v-if="error"
                type="error"
                title="Error!"
                :text="error"
            ></v-alert>
            <v-btn @click="save" class="mt-2" color="black">Save Song</v-btn>
        </div>
    </div>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
    methods: {
        async save() {
            this.error = null;
            const areAllFieldsFilledIn = Object.keys(this.song).every(
                (key) => !!this.song[key]
            );
            if (!areAllFieldsFilledIn) {
                this.error = "Please fill in all fields!";
                return;
            }
            const songId = this.$router.currentRoute.value.params.songId;
            try {
                await SongsService.put(this.song);
                this.$router.push({
                    name: "songs",
                    params: {
                        songId: songId,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
    async mounted() {
        try {
            const songId = this.$router.currentRoute.value.params.songId;
            this.song = (await SongsService.show(songId)).data;
        } catch (error) {
            console.log(error);
        }
    },
    data() {
        return {
            required(value) {
                return !!value || "Field is required";
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
            error: null,
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

.error {
    color: red;
}
</style>
