import { useMovie } from "@/composables/useMovie";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { parserCast } = useMovie();

    const query = getQuery(event);

    const res = await $fetch(
        `${config.public.apiBase}/genre/movie/list?api_key=${config.apiSecret}&language=en-US`
    );

    return res;
});
