<template>
    <div class="pt-8"> <!-- Home Page Loading Skeleton -->
        <section class="py-4">
            <div class="flex justify-center">
                <div class="flex gap-4  px-4">
                    <!-- Loading Cards -->
                    <div v-for="i in 5" :key="i" role="status"
                        class="flex-none max-w-sm w-60 p-4 border border-gray-200 rounded-lg shadow-lg animate-pulse dark:border-gray-700 dark:bg-gray-800">
                        <!-- Image Placeholder -->
                        <div class="h-40 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
                        <!-- Text Placeholders -->
                        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-3"></div>
                        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2"></div>
                        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-4"></div>
                        <!-- Button Placeholder -->
                        <div class="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 w-24"></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script></script>
<style></style>