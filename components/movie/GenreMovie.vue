<template>
    <ul class="flex items-center gap-4">
        <li
            v-for="genre in genres"
            :key="genre.id"
            class="font-bold text-xs bg-alt-300 text-main-300 text-opacity-80 px-3 py-1 rounded-2xl"
        >
            <NuxtLink :to="`/genre/${genre.id}`">{{ genre.name }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
defineProps(["genres"]);
</script>
