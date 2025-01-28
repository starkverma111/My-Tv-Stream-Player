<template>
  <HeaderComp />
  <SliderComp />
  <SearchComp />

  <!-- Movies Section -->
  <CardsComp v-if="movies.length" title="Movies" :cards="movies.slice(0, 11)" />

  <!-- Kdrama Section -->
  <CardsComp v-if="kdramas.length" title="Kdrama" :cards="kdramas.slice(0, 11)" />

  <!-- Historical Section -->
  <CardsComp v-if="historical.length" title="Historical" :cards="historical.slice(0, 11)" />

  <!-- Loader -->
  <div v-if="isLoading" class="bg-white dark:bg-gray-900">
    <HomeSkeleton />
  </div>

  <FooterComp />
</template>


<script>
import axios from "axios";
import HeaderComp from "../components/HeaderComp.vue";
import SearchComp from "../components/SearchComp.vue";
import SliderComp from "../components/SliderComp.vue";
import CardsComp from "../components/CardsComp.vue";
import FooterComp from "../components/FooterComp.vue";
import HomeSkeleton from "../components/loading/HomeSkeleton.vue";



export default {
  name: "MainLayout",
  components: {
    HeaderComp,
    SliderComp,
    SearchComp,
    CardsComp,
    FooterComp,
    HomeSkeleton,

  },
  data() {
    return {
      allCards: [], // Combined data from API
      movies: [], // Filtered movies
      kdramas: [], // Filtered kdramas
      historical: [], // Filtered historical
      isLoading: true, // Show loader when data is loading
      cardLimit: 11, // Dynamically control the card limit
    };
  },

  mounted() {
    this.fetchCards(); // Fetch the data when the component mounts
  },
  methods: {
    // Fetch cards from API
    async fetchCards() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_VIDEO}`);
        this.allCards = response.data;
        this.movies = this.allCards.filter((item) => item.category === "Movies");
        this.kdramas = this.allCards.filter((item) => item.category === "kdrama");
        this.historical = this.allCards.filter((item) => item.category === "Historical");
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        this.isLoading = false; // Set loading to false once data is fetched
      }
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
</style>
