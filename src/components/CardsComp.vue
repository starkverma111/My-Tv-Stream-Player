<template>
  <section class="dark:bg-gray-900 py-8">
    <div class="max-w-screen-2xl mx-auto px-4 animate__animated animate__fadeInUp">
      <!-- Header -->
      <div class="flex justify-between items-center px-4 mb-6">
        <p class="text-xl sm:text-2xl text-gray-900 dark:text-white font-semibold">
          {{ title }}
        </p>
        <p 
          @click="navigateToViewAll"
          class="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-blue-500 cursor-pointer">
          View all
        </p>
      </div>

      <!-- Scrollable Cards -->
      <div class="flex items-center gap-4">
        <!-- Left Scroll Button -->
        <button
          type="button"
          class="hidden sm:block text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2 inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
          @click="scrollCards('left')">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
          </svg>
        </button>

        <!-- Cards Container -->
        <div 
          ref="cardsContainer" 
          class="flex gap-4 overflow-hidden flex-nowrap cards-container px-2 "
          @mousedown="startDrag" 
          @touchstart="startDrag"
          @mousemove="drag" 
          @touchmove="drag" 
          @mouseup="stopDrag" 
          @touchend="stopDrag">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex-none w-60 p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <!-- Card Image -->
            <div 
              :class="[ 
                `bg-[url('${card.thumbnail}')]`, 
                'bg-cover bg-center h-72 rounded-md brightness-75 hover:brightness-100 duration-150'
              ]">
            </div>

            <!-- Card Content -->
            <p class="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 font-medium">
              {{ card.title }}
            </p>
            <div class="flex justify-between items-center mt-3">
              <span
                class="text-xs sm:text-sm bg-gray-100 text-gray-800 font-medium px-2 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {{ card.id }}
              </span>
              <button
                @click="navigateToPlayer(card)"
                class="text-sm px-3 py-1.5 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 flex items-center">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd" />
                </svg>
                Play
              </button>
            </div>
          </div>
        </div>

        <!-- Right Scroll Button -->
        <button
          type="button"
          class="hidden sm:block text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2 inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
          @click="scrollCards('right')">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardsComp",
  props: {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
    };
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
      this.scrollLeft = this.$refs.cardsContainer.scrollLeft;
      document.body.style.cursor = 'grabbing';
    },
    drag(event) {
      if (!this.isDragging) return;
      const x = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
      const distance = (x - this.startX) * 2; // Adjust the dragging speed
      this.$refs.cardsContainer.scrollLeft = this.scrollLeft - distance;
    },
    stopDrag() {
      this.isDragging = false;
      document.body.style.cursor = 'default';
    },
    scrollCards(direction) {
      const container = this.$refs.cardsContainer;
      const scrollAmount = direction === "left" ? -900 : 900;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    },
    navigateToPlayer(card) {
      this.$router.push({
        name: "PlayPage",
        query: {
          id: card.id,
        },
      });
    },
    navigateToViewAll() {
      const dynamicRoute = this.title.toLowerCase().replace(/\s+/g, ""); // Converts title to a URL-friendly format
      this.$router.push({
        path: `/${dynamicRoute}/`,
      });
    },
  },
};
</script>
