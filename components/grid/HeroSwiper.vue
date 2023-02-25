<template>
    <swiper-container :effect="'fade'">
        <swiper-slide v-for="movie in results" :key="movie.id">
            <div
                class="relative min-h-[90vh] text-light-300 flex items-center justify-center"
            >
                <div class="container">
                    <div
                        class="absolute inset-0 w-full h-full z-10 before:absolute before:inset-0 before:bg-gradient-diagonal before:from-main-300/95 before:via-main-300/75 before:to-main-300/45"
                    >
                        <img
                            :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
                            :alt="movie.title"
                            class="object-cover w-full h-full"
                        />
                    </div>
                    <div class="relative z-20 w-full md:max-w-[50%]">
                        <h2 class="text-h1 font-bold">{{ movie.title }}</h2>
                        <p class="card-hero__excerpt">{{ movie.overview }}</p>
                        <ButtonUI :href="`/movie/${movie.slug}`"
                            >Watch Trailer</ButtonUI
                        >
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import ButtonUI from "@/components/utilities/ButtonUI.vue";

register();
defineProps(["results"]);
</script>
