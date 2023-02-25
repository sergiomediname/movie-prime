<template>
    <header class="header fixed top-0 left-0 w-full z-40">
        <div class="container">
            <div class="wrapp flex items-center justify-between py-4">
                <div class="logotipo">
                    <NuxtLink to="/"
                        ><span class="font-bold h4">MoviePrime</span></NuxtLink
                    >
                </div>
                <nav>
                    <ul class="flex items-center gap-6">
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Series</li>
                        <li>My list</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup></script>
