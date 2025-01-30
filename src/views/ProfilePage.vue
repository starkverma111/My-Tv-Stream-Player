<template>
    <div>
        <!-- Include the Navbar Component -->
        <HeaderComp />
        <!-- Main Content for Profile Page -->
        <section class="bg-white dark:bg-gray-900 h-screen">
            <div
                class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6  animate__animated animate__fadeIn">
                <!-- Decorative Fancy Border Section -->
                <div class="overflow-hidden">
                    <img class="hidden md:block w-full rounded-2xl bg-stone-50 h-auto object-cover" src="@/assets/img/girl8.png"
                        alt="Dashboard image">
                </div>
                <!-- Text Content Section -->
                <div class="mt-4 md:mt-0 text-center md:text-left">
                    <h2 class="p-2 mb-4 text-3xl max-w-md font-bold text-gray-900 dark:text-white">
                        Welcome to {{ $heading }}
                    </h2>

                    <div class="flex items-center p-6 text-sm text-start text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                        role="alert">
                        <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Congratulations:</span> {{ user.fname }} {{ user.lname }} you get
                            a 1-year My Tv - Stream Player free
                            subscription.Enjoy unlimited streaming of your favorite shows and movies. Stay tuned for
                            exclusive content and updates!
                        </div>
                    </div>

            <div class="w-full md:max-w-sm mt-8">
                <p class="mb-6 text-gray-700  font-medium  md:text-lg dark:text-gray-400">
                    Your Account Details
                    </p>

                    <!-- First Line: Two Input Boxes -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="first-name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="text" id="first-name" v-model="user.fname"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled>
                        </div>

                        <div>
                            <label for="last-name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" id="last-name" v-model="user.lname"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled>
                        </div>
                    </div>

                    <!-- Second Line: Email Input -->
                    <div class="mt-4">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                            Address</label>
                        <input type="email" id="email" v-model="user.email"
                            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            disabled>
                    </div>

                </div>

                </div>
            </div>
        </section>
        <!-- Include the Footer Component -->
        <FooterComp />
    </div>
</template>

<script>
// Import the Navbar and Footer components
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/FooterComp.vue';


export default {
    name: 'AboutPage',
    components: {
        HeaderComp,
        FooterComp
    },
    computed: {
        isAuthenticated() {
            return localStorage.getItem('authToken') !== null;
        },
        user() {
            const userData = localStorage.getItem('authUser');
            return userData ? JSON.parse(userData) : {};
        },
    },
};
</script>
<style scoped>
/* Add custom styles here if needed */
</style>