import { useMovie } from "@/composables/useMovie";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { parserData } = useMovie();

    const query = getQuery(event);

    const res = await $fetch(
        `${config.public.apiBase}/${query.get}?api_key=${config.apiSecret}&language=en-US`
    );

    return parserData(res);
});
