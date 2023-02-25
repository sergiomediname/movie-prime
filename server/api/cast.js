import { useMovie } from "@/composables/useMovie";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { parserCast } = useMovie();

    const query = getQuery(event);

    const res = await $fetch(
        `${config.public.apiBase}/${query.get}?api_key=${config.apiSecret}&language=en-US`
    );

    const data = res.cast.filter(
        (el) => el.known_for_department === "Acting" && el.profile_path
    );

    const cast = data.map((actor) => parserCast(actor));

    return {
        ...res,
        cast,
    };
});
