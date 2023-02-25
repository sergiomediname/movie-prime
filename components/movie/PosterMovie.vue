<template>
    <div class="overflow-hidden aspect-[2/3] rounded-md">
        <img
            :src="poster_path"
            :alt="title"
            :title="title"
            class="object-cover w-full h-full"
        />
    </div>
</template>

<script setup>
defineProps(["poster_path", "title"]);
</script>
