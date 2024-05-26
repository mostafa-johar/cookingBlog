<template>
    <header>

        <nav class="flex justify-between items-center md:flex-row flex-col gap-3 p-2 shadow-md">
            <NuxtLink to="/">
                <img src="../public/imgs/logo.svg" alt="Logo" class="object-contain w-[200px] h-[100%]" loading="lazy">
            </NuxtLink>
            <ul class="flex gap-3 px-[2px]">
                <li v-for="(item, index) in ['Home', 'about', 'Submit', 'Contact']" :key="index">
                    <nuxt-link :to="`${item == 'Home' ? '/' : ''}`" class="capitalize">{{ item }}</nuxt-link>
                </li>
            </ul>
            <form class='w-full md:w-auto'>
                <input type="search" name="search" id="search" placeholder="Search..."
                    class="border-[1px] shadow-sm border-gray-200 w-full p-1">
            </form>
        </nav>
    </header>
</template>