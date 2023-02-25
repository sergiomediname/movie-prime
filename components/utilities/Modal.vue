<template>
    <div
        class="fixed inset-0 bg-main-300 bg-opacity-95 z-50 flex items-center"
        v-if="show_modal"
    >
        <div class="container">
            <button @click="emit('toggleModal')"><iClose /></button>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import iClose from "@/components/icons/iClose.vue";
defineProps(["show_modal"]);
const emit = defineEmits(["toggleModal"]);
</script>

<style lang="scss" scoped></style>
