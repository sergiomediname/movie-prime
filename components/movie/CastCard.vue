<template>
    <div class="relative flex items-center flex-row gap-4">
        <div class="max-w-[25%] aspect-square overflow-hidden rounded-full">
            <img
                class="object-cover w-full h-full"
                :src="actor.profile_path"
                :alt="actor.name"
            />
        </div>
        <div class="text-sm">
            <span class="block font-medium mb-1">{{ actor.name }}</span>
            <span class="block opacity-70 text-xs">{{ actor.character }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps(["actor"]);
</script>
