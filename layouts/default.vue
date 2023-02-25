<template>
    <div class="app">
        <Header />
        <main class="main"><slot /></main>
    </div>
</template>

<script setup>
import Header from "@/components/global/Header.vue";
</script>
