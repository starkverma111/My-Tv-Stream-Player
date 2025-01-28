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
                    <img class="w-full rounded-2xl bg-stone-50 h-auto object-cover" src="@/assets/img/girl8.png"
                        alt="Dashboard image">
                </div>
                <!-- Text Content Section -->
                <div class="mt-4 md:mt-0 text-center md:text-left">
                    <h2 class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Welcome to {{ $heading }} 
                    </h2>
                    <p p class="mb-2 font-light text-gray-500 text-xl dark:text-white">
                       {{ user.fname }} {{ user.lname }}
                    </p>
                    <h2 p class="mb-2 font-light text-gray-500 text-xl dark:text-white">
                       {{ user.email }}
                    </h2>

                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Welcome to My TV - Stream Player, your go-to platform for free movies, TV shows, K-dramas, and
                        anime.
                        We’re dedicated to making entertainment accessible, offering a vast library of content for every
                        taste.
                        Whether you're a fan of thrilling dramas, laugh-out-loud comedies, or captivating animations,
                        we’ve got you covered.
                    </p>
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