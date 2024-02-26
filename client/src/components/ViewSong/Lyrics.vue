<template>
    <panel title="Lyrics" class="ml-2 mt-2">
        <textarea name="lyrics" readonly v-model="song.lyrics"></textarea>
    </panel>
</template>

<script>
import Panel from "@/components/Panel.vue";
export default {
    components: {
        Panel,
    },
    props: ["song"],
};
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
