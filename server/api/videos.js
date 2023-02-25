import { useMovie } from "@/composables/useMovie";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const query = getQuery(event);
    const res = await $fetch(
        `${config.public.apiBase}/${query.get}?api_key=${config.apiSecret}&language=en-US`
    );

    return res;

    const results = res.results.filter((el) => el.type === 'Trailer');

    return {
        ...res,
        results
    };
});
