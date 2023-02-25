<template>
    <div class="relative">
        <swiper-container
            :space-between="20"
            :slides-per-view="2"
            :breakpoints="{
                '992': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                '1230': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }"
        >
            <swiper-slide
                v-for="(video, i) in videos.results"
                :key="video.id"
                @click="setIframeID(video.key)"
            >
                <div
                    class="relative aspect-video overflow-hidden cursor-pointer"
                >
                    <span
                        class="absolute w-8 h-8 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center rounded-full border bg-main-300 bg-opacity-70"
                        ><iPlay class="i--md"
                    /></span>
                    <img
                        :src="`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`"
                        :alt="video.name"
                        class="object-cover w-full h-full"
                    />
                </div>
            </swiper-slide>
        </swiper-container>
        <Modal @toggleModal="toggleModal" :show_modal="show_modal">
            <div class="relative aspect-video">
                <iframe
                    class="absolute inset-0 w-full h-full"
                    width="560"
                    height="315"
                    :src="`https://www.youtube.com/embed/${iframe_id}?controls=0&autoplay=1`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </Modal>
    </div>
</template>

<script setup>
import Modal from "@/components/utilities/Modal.vue";
import iPlay from "@/components/icons/iPlay.vue";
import { register } from "swiper/element/bundle";
register();

const props = defineProps(["movie_id"]);

const videos = await $fetch(`/api/videos?get=movie/${props.movie_id}/videos`);

const iframe_id = ref("");
const show_modal = ref(false);

const setIframeID = (id) => {
    iframe_id.value = id;
    toggleModal();
};

const toggleModal = () => {
    console.log("test");
    show_modal.value = !show_modal.value;
};
</script>

<style>
/* swiper-slide:not(.swiper-slide-active) {
    opacity: 0.3;
} */
</style>

<!-- https://icones.js.org/collection/bx?s=x -->
