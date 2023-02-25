<template>
    <MovieProviders />
    <section class="popular-movies">
        <HeroSwiper :results="popular.results" />
    </section>

    <SectionCategory :title="'Now Playing'">
        <MovieGrid :data="now_playing.results" />
    </SectionCategory>

    <SectionCategory :title="'Action'" :genre_id="18">
        <MovieGrid :data="action.results" />
    </SectionCategory>

    <SectionCategory :title="'Comedy'" :genre_id="35">
        <MovieGrid :data="comedy.results" />
    </SectionCategory>
</template>

<script setup>
import MovieProviders from "@/components/MovieProviders.vue";
import HeroSwiper from "@/components/grid/HeroSwiper.vue";
import SectionCategory from "@/components/utilities/SectionCategory.vue";
import MovieGrid from "@/components/grid/MovieGrid.vue";

const popular = await $fetch("/api/tmdb?get=movie/popular&max=5");
const now_playing = await $fetch("/api/tmdb?get=movie/now_playing&max=5");
const action = await $fetch(
    "/api/tmdb?get=discover/movie&max=5&with_genres=18"
);
const comedy = await $fetch(
    "/api/tmdb?get=discover/movie&max=5&with_genres=35"
);
</script>
