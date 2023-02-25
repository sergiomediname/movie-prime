import slugify from "slugify";

export const useMovie = () => {
    const BASE_URL_IMG = "https://image.tmdb.org/t/p";

    /**
     * Parsear información de película para listados
     *
     * @param {obj} movie Objeto de información película
     * @returns {obj} Objeto parseado
     */
    const parserData = (movie) => {
        const parser_data = {};

        // Movie Slug
        if (movie.title) {
            const slug = (movie.slug =
                slugify(movie.title, {
                    lower: true,
                    strict: false,
                    remove: /:/,
                }) +
                "-" +
                movie.id);
            parser_data.slug = slug;
        }

        if (movie.backdrop_path) {
            const backdrop_path = `${BASE_URL_IMG}/original${movie.backdrop_path}`;
            parser_data.backdrop_path = backdrop_path;
        }

        if (movie.poster_path) {
            const poster_path = `${BASE_URL_IMG}/w400${movie.poster_path}`;
            parser_data.poster_path = poster_path;
        }

        if (movie.vote_average) {
            const vote_average = Math.round(movie.vote_average * 10) / 10;
            parser_data.vote_average = vote_average;
        }

        if (movie.genres) {
            const genres = movie.genres;

            genres.forEach((el) => {
                const sanitize_name = slugify(el.name, { lower: true });
                el.slug = `${sanitize_name}-${el.id}`;
            });
            parser_data.genres = genres;
        }

        if(movie.logo_path) {
            const logo_path = `${BASE_URL_IMG}/w400${movie.logo_path}`;
            parser_data.logo_path = logo_path;
        }

        return {
            ...movie,
            ...parser_data,
        };
    };

    /**
     * Parsear información de actor
     * @param {obj} actor Objeto de información de actore
     * @returns {obj} Objeto parseado
     */
    const parserCast = (actor) => {
        const profile_path = `${BASE_URL_IMG}/w154${actor.profile_path}`;

        return {
            ...actor,
            profile_path,
        };
    };

    /**
     * Obtener un string de la query de consulta
     *
     * @param {obj} q Objeto de parametros de la consulta
     * @returns {string} Query para consulta
     */
    const parserQuery = (q) => {
        let query = "";
        const query_keys = Object.keys(q).filter(
            (el) => el !== "get" && el !== "max"
        );
        query_keys.forEach((key) => (query += `&${key}=${q[key]}`));

        return query;
    };

    return {
        parserData,
        parserCast,
        parserQuery,
    };
};
