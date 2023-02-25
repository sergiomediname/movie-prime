<template>
    <div
        class="absolute -z-10 top-0 left-0 w-full min-h-[45rem] overflow-hidden bg-red-200 before:absolute before:inset-0 before:z-20 before:bg-gradient-to-t before:from-main-300 before:via-main-300/80 before:to-main-300/10"
    >
        <div class="absolute inset-0 z-10">
            <img
                :src="backdrop_path"
                :alt="`backdrop ${title}`"
                class="object-cover w-full h-full"
            />
        </div>
    </div>
</template>

<script setup>
defineProps(["backdrop_path", "title"]);
</script>
