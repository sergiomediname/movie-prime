<template>
    <div class="grid grid-cols-5 gap-10">
        <CardMovie v-for="movie in data" :key="movie.id" :movie="movie" />
    </div>
</template>

<script setup>
import CardMovie from "@/components/card/CardMovie.vue";

defineProps(["data"]);
</script>
