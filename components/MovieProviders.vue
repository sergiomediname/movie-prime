<template>
    <div>
        <ul>
            <li
                v-for="provider in movie_providers.results"
                :key="provider.provider_id"
            >
                <img :src="provider.logo_path" alt="" />
            </li>
        </ul>
    </div>
</template>

<script setup>
const movie_providers = await $fetch(
    "/api/tmdb?get=watch/providers/movie&watch_region=US"
);
</script>
