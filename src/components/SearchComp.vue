<template>
  <section class="dark:bg-gray-900">
    <div class="max-w-2xl px-4 mx-auto pt-5">
      <div class="mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input v-model="query" type="search" id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Movies, Shows, Drama..." required />
          <button @click="handleSearch" type="button"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-8 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Search results -->
  <section v-if="filteredCards.length > 0" class="py-8 dark:bg-gray-900">
    <div class="bg-gray-100 dark:bg-gray-900 rounded-xl border-gray-500 max-w-7xl m-auto p-2">
      <div class="flex justify-between items-center p-8">
        <div class="text-xl dark:text-white">Search content</div>
        <button @click="closeSearch" type="button"
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
          <svg class="w-5 h-5 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
          Close Search
        </button>
      </div>
      <div class="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
        <div ref="cardsContainer" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div v-for="card in filteredCards" :key="card.id"
            class="max-w-sm m-auto p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div :class="[`bg-[url('${card.thumbnail}')]`, 'bg-cover bg-center h-72 rounded-md brightness-75 hover:brightness-100 duration-150 ']">
            </div>
            <p class="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 font-medium">{{ card.title }}</p>
            <p class="mt-4 text-sm text-gray-700 dark:text-gray-400 font-thin line-clamp-2">{{ card.description }}</p>
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
      </div>
    </div>
  </section>

  <!-- No data found -->
  <section v-if="searched && filteredCards.length === 0" class="py-8 text-center dark:bg-gray-900">
    <div id="alert-5" class="m-auto flex items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 max-w-2xl" role="alert">
      <svg class="shrink-0 w-4 h-4 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div class="ms-3 text-sm font-medium text-gray-800 dark:text-gray-300">
        No data found for "{{ query }}"
      </div>
      <button @click="closeSearch" type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        data-dismiss-target="#alert-5" aria-label="Close">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchComp",
  data() {
    return {
      query: '',
      cards: [],
      flatCards: [],
      filteredCards: [],
      searched: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_VIDEO}`);
        const data = await response.json();
        this.cards = data;
        this.flatCards = data.reduce((acc, card) => {
          acc.push(card);
          if (card.related && Array.isArray(card.related)) {
            card.related.forEach(child => {
              acc.push({
                ...child,
                parentId: card.id,
                parentTitle: card.title,
              });
            });
          }
          return acc;
        }, []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    handleSearch() {
      const lowerQuery = this.query.trim().toLowerCase();
      if (!lowerQuery) {
        return;
      }
      this.searched = true;
      this.filteredCards = this.flatCards.filter(card =>
        card.title.toLowerCase().includes(lowerQuery) ||
        card.description.toLowerCase().includes(lowerQuery)
      );
    },
    closeSearch() {
      this.query = '';
      this.filteredCards = [];
      this.searched = false;
    },
    navigateToPlayer(card) {
      this.$router.push({
        name: "PlayPage",
        query: {
          id: card.id,
        },
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
