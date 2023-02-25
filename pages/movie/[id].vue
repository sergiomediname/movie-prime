<template>
    <BackdropMovie :backdrop_path="movie.backdrop_path" :title="movie.title" />

    <div class="movie mt-60">
        <div class="container">
            <header class="grid grid-cols-12 gap-8">
                <div class="col-span-6 md:col-span-4 lg:col-span-3">
                    <PosterMovie
                        :poster_path="movie.poster_path"
                        :title="movie.title"
                    />
                </div>
                <div class="col-span-12 md:col-span-8 lg:col-span-9">
                    <h1 class="font-bold mb-4">
                        {{ movie.title }}
                    </h1>
                    <div class="flex items-center gap-4 mb-8">
                        <VoteAverage :votes="movie.vote_average" />
                        <GenreMovie :genres="movie.genres" />
                    </div>
                    <p class="movie__excerpt mb-10">{{ movie.overview }}</p>
                    <div class="flex gap-4">
                        <ButtonUI href="#movie-videos" class="btn--main"
                            ><iPlay class="i--md" /><span
                                >Watch Trailer</span
                            ></ButtonUI
                        >
                        <ButtonUI @click="favorite" aria-label="Add favorite"
                            ><iHeartOutline
                                class="i--md"
                                v-if="!current_favorite" /><iHeart
                                class="i--md"
                                v-else
                        /></ButtonUI>
                    </div>
                </div>
            </header>

            <section id="movie-videos" class="my-16">
                <h2 class="h3 mb-6">Videos</h2>
                <Trailers :movie_id="movie_id" />
            </section>

            <div id="movie-cast" class="my-16">
                <h2 class="h3 mb-6">Cast</h2>
                <div
                    class="movie-cast grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
                >
                    <CastCard
                        v-for="actor in credits.cast"
                        :key="actor.cast_id"
                        :actor="actor"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BackdropMovie from "@/components/movie/BackdropMovie.vue";
import PosterMovie from "@/components/movie/PosterMovie.vue";
import GenreMovie from "@/components/movie/GenreMovie.vue";

import VoteAverage from "@/components/utilities/VoteAverage.vue";
import CastCard from "@/components/movie/CastCard.vue";
import Trailers from "@/components/movie/Trailers.vue";
import ButtonUI from "@/components/utilities/ButtonUI.vue";

import iHeartOutline from "@/components/icons/iHeartOutline.vue";
import iHeart from "@/components/icons/iHeart.vue";
import iPlay from "@/components/icons/iPlay.vue";

const route = useRoute();

const movie_id = route.params.id.match(/\d+$/);

const movie = await $fetch(`/api/single?get=movie/${movie_id}`);
const credits = await $fetch(`/api/cast?get=movie/${movie_id}/credits`);

const current_favorite = ref(false);
const favorite = () => (current_favorite.value = !current_favorite.value);

useHead({
    titleTemplate: (pageTitle) => {
        return movie.title;
    },
    meta: [
        {
            property: "title",
            name: "title",
            content: movie.title,
        },
        {
            property: "og:title",
            name: "og:title",
            content: movie.title,
        },
        {
            property: "description",
            name: "description",
            content: movie.overview,
        },
        {
            property: "og:description",
            name: "og:description",
            content: movie.overview,
        },
        {
            property: "og:image",
            name: "og:image",
            content: movie.backdrop_path,
        },
        {
            property: "og:type",
            name: "og:type",
            content: "video.movie",
        },
        {
            property: "og:url",
            name: "og:url",
            content: route.fullPath,
        },
    ],
});
</script>

<!-- https://www.librefutbol.org/ -->
