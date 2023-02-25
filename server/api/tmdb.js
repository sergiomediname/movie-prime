import { useMovie } from "@/composables/useMovie";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { parserData, parserQuery } = useMovie();

    const query = getQuery(event);
    const parser_query = parserQuery(query);

    const res = await $fetch(
        `${config.public.apiBase}/${query.get}?api_key=${config.apiSecret}${parser_query}&language=en-US`
    );

    const data = query.max ? res.results.slice(0, query.max) : res.results;

    const results = data.map((el) => parserData(el));

    return {
        ...res,
        results,
    };
});
