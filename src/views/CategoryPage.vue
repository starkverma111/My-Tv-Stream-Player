<template>
  <div class="flex flex-col min-h-screen">
    <!-- Include the Navbar Component -->
    <HeaderComp />

    <!-- Main Content for Category Page -->
    <section class="flex-grow bg-gray-50 dark:bg-gray-900">
      <div class="animate__animated animate__fadeIn">
        <div class="py-6 px-6 mx-auto max-w-screen-lg text-center">
          <h1
            class="mb-4 text-xl font-extrabold tracking-tight leading-snug text-gray-900 sm:text-2xl lg:text-4xl dark:text-white">
            Category: {{ category }}
          </h1>
          <p class="text-base font-normal text-gray-500 sm:text-lg lg:text-xl dark:text-gray-400">
            Browse through the best collection of {{ category }}.
          </p>
        </div>

        <!-- Category Grid -->
        <div class="py-4 px-4 mx-auto max-w-screen-xl">
          <div v-if="loading">
            <!-- Skeleton Loader -->
            <CategorySkeleton />
          </div>
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div
              v-for="(item, index) in displayedItems"
              :key="index"
              class="relative bg-white border border-gray-200 rounded-lg shadow-md p-4 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <!-- Thumbnail -->
              <img
                :src="item.thumbnail"
                alt="Thumbnail"
                class="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 brightness-75 hover:brightness-100 transition-transform transform hover:scale-105 duration-200" />

              <!-- Title and Rating -->
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">{{ item.title }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Rating: {{ item.id }}</p>

              <!-- Play Button -->
              <button
                @click="navigateToPlayer(item)"
                class="absolute bottom-4 right-4 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 flex items-center">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                    clip-rule="evenodd" />
                </svg>
                Play
              </button>
            </div>
          </div>

          <!-- See More Button -->
          <div v-if="hasMoreItems" class="flex justify-center my-8">
            <button @click="loadMoreItems" type="button" class="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  
            font-medium rounded-lg text-sm px-5 py-1.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
            dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <svg class="me-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
              </svg>
              View More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Include the Footer Component -->
    <FooterComp />
  </div>
</template>


<script>
import axios from "axios";
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import CategorySkeleton from "../components/loading/HomeSkeleton.vue";

export default {
  name: "CategoryPage",
  components: {
    HeaderComp,
    FooterComp,
    CategorySkeleton,
  },
  data() {
    return {
      category: this.$route.params.category, // Get the dynamic route parameter
      allItems: [], // All fetched items
      displayedItems: [], // Items currently displayed
      loading: true, // Loading state for API fetch
      itemsPerPage: 4, // Number of items to load per click
      currentIndex: 0, // Keeps track of the current index of items being displayed
      hasMoreItems: true, // Flag to indicate if more items are available
    };
  },
  computed: {
    filteredCategory() {
      // Filter items based on the current category
      return this.allItems.filter((item) => item.category.toLowerCase() === this.category.toLowerCase());
    },
  },
  created() {
    this.fetchCategory(); // Fetch items when the component is created
  },
  methods: {
    async fetchCategory() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_VIDEO}`);
        this.allItems = response.data; // Store all items
        this.loadMoreItems(); // Initially load 8 items from filtered data
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        this.loading = false; // Set loading to false once data is fetched
      }
    },
    loadMoreItems() {
      // Get the filtered items based on the current category
      const filteredItems = this.filteredCategory;

      // Load the next 8 items from the filtered list
      const nextItems = filteredItems.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
      
      if (nextItems.length > 0) {
        this.displayedItems = [...this.displayedItems, ...nextItems];
        this.currentIndex += this.itemsPerPage; // Update current index
      }

      // Check if there are more items to load
      if (this.currentIndex >= filteredItems.length) {
        this.hasMoreItems = false; // No more items left to load
      }
    },
    navigateToPlayer(item) {
      // Navigate to the player page with item details
      this.$router.push({
        name: "PlayPage",
        query: {
          id: item.id,
        },
      });
    },
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
