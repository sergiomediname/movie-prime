<template>
    <div
        class="relative w-12 h-12"
        :style="`--val: ${props.votes}; --status-color: ${status}`"
    >
        <span class="absolute inset-0 leading-[3rem] text-center text-sm">{{
            props.votes
        }}</span>
        <svg viewBox="0 0 120 120" class="-rotate-90">
            <circle
                class="stroke-main-300"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e6e6e6"
                stroke-width="12"
            />
            <circle
                class="percent"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke-width="12"
                pathLength="10"
            />
        </svg>
    </div>
</template>

<script setup>
const props = defineProps(["votes"]);
const status = ref("");

switch (true) {
    case props.votes <= 3:
        status.value = "#991b1b";
        break;

    case props.votes > 3 && props.votes <= 6:
        status.value = "#eab308";
        break;

    default:
        status.value = "#16a34a";
        break;
}
</script>

<style scoped>
.percent {
    stroke: var(--status-color);
    stroke-dasharray: 10;
    stroke-dashoffset: calc(10 - var(--val));
}
</style>
