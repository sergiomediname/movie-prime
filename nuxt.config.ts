// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'MoviePrime',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'og:title', content: 'MoviePrime' },
                { name: 'description', content: 'MoviePrime is the most popular source for movie content. Find ratings and videos of the latest movies.' },
                { name: 'og:description', content: 'MoviePrime is the most popular source for movie content. Find ratings and videos of the latest movies.' },
                { name: 'og:site_name', content: 'MoviePrime' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    // href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;900&display=swap'
                    href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap'
                }
            ]
        }
    },
    modules: [
        '@pinia/nuxt'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '@/assets/sass/main.scss',
    ],
    runtimeConfig: {
        apiSecret: process.env.API_SECRET, // can be overridden by NUXT_API_SECRET environment variable
        public: {
            apiBase: 'https://api.themoviedb.org/3', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        }
    },
})
