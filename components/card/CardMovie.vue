<template>
    <div>
        <div class="relative aspect-[2/3] overflow-hidden rounded-md mb-2">
            <NuxtLink :to="`/movie/${movie.slug}`">
                <img
                    :src="movie.poster_path"
                    :alt="movie.title"
                    loading="lazy"
                    class="object-cover w-full h-full"
                />
            </NuxtLink>
        </div>
        <h2 class="text-sm">
            <NuxtLink :to="`/movie/${movie.slug}`">{{ movie.title }}</NuxtLink>
        </h2>
    </div>
</template>

<script setup>
defineProps(["movie"]);
</script>
