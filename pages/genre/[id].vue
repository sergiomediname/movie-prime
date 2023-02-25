<template>
    <div>
        <div class="container mt-24">
            <div class="flex items-center justify-between">
                <h1 class="h3">{{ current_genre[0].name }} films</h1>
                <div>
                    <select
                        name="test"
                        id=""
                        v-model="current_order"
                        @change="changeSortBy"
                    >
                        <option
                            v-for="(order, index) in values"
                            :key="index"
                            :value="index"
                        >
                            {{ order }}
                        </option>
                    </select>
                </div>
            </div>
            <MovieGrid :data="data.results" />
            <div class="flex justify-between items-center">
                <button class="btn" @click="changePagination('prev')">
                    Prev
                </button>
                <span
                    >Page {{ current_pagination }} of {{ max_pagination }}</span
                >
                <button class="btn" @click="changePagination('next')">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import MovieGrid from "@/components/grid/MovieGrid.vue";
const route = useRoute();
const current_pagination = ref(1);
const LOCAL_STORAGE_NAME = "pm_filters";

// Ordenar
const current_order = ref("popularity.desc");
const values = {
    "popularity.desc": "Decreasing Popularity",
    "popularity.asc": "Increasing Popularity",
    "release_date.desc": "Decreasing Release Date",
    "release_date.asc": "Increasing Release Date",
    "original_title.desc": "Decreasing Original Title",
    "original_title.asc": "Increasing Original Title",
};

const changeSortBy = async () => {
    const sort_by = await $fetch(
        `/api/tmdb?get=discover/movie&with_genres=${route.params.id}&page=${current_pagination.value}&sort_by=${current_order.value}`
    );
    data.value = sort_by;
};

const { genres } = await $fetch("/api/genre");
const current_genre = genres.filter(
    (el) => el.id === parseInt(route.params.id)
);

const res = await $fetch(
    `/api/tmdb?get=discover/movie&with_genres=${route.params.id}&page=${current_pagination.value}&sort_by=${current_order.value}`
);
const data = ref(res);
const max_pagination = ref(res.total_pages);
const changePagination = async (action) => {
    if (action === "next" && current_pagination.value < max_pagination.value) {
        current_pagination.value++;
        console.log(current_pagination.value);
    }
    if (action === "prev" && current_pagination.value > 1) {
        current_pagination.value--;
        console.log(current_pagination.value);
    }

    const change = await $fetch(
        `/api/tmdb?get=discover/movie&with_genres=${route.params.id}&page=${current_pagination.value}&sort_by=${current_order.value}`
    );
    data.value = change;
};
</script>
