<template>
    <section class="watching-now my-16">
        <div class="container">
            <div class="flex items-center justify-between mb-6">
                <h2 class="h3">{{ title }}</h2>
                <ButtonUI v-if="genre_id" :href="`/genre/${genre_id}`"
                    >View all</ButtonUI
                >
            </div>
            <slot />
        </div>
    </section>
</template>

<script setup>
import ButtonUI from "@/components/utilities/ButtonUI.vue";

defineProps(["title", "genre_id"]);
</script>
