<template>
    <panel title="Youtube Video" class="ml-2">
        <LiteYouTubeEmbed :id="youtubeId" title="youtube_song_embed" />
    </panel>
</template>

<script>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

export default {
    components: {
        LiteYouTubeEmbed,
    },
    props: ["youtubeId"],
};
</script>

<style scoped></style>
