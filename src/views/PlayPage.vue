<template>
  <HeaderComp />
    <section class="relative min-h-screen dark:bg-gray-900">
        <!-- Background Pattern -->
        <div class="absolute inset-0 -z-20 h-full w-full">
          <div class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <!-- Main Grid -->
        <div class="grid max-w-screen-2xl py-2 mx-auto lg:gap-4 xl:gap-4 lg:py-8 lg:grid-cols-12 h-full">
          <!-- Video Column -->
          <div class="lg:col-span-9 col-span-12 px-4">
            <div class="aspect-video bg-black rounded-lg overflow-hidden relative animate__animated animate__fadeIn">
              <!-- Thumbnail Display -->
              <img v-if="!isPlaying" :src="video.thumbnail || blackBackground" alt="Video Thumbnail" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
              <!-- Play Button -->
              <button v-if="!isPlaying" @click="startVideo" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60 rounded-lg">
                <!-- Show Play Button -->
                <svg v-if="!isLoading" class="w-16 h-16 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <!-- Show Loading Spinner -->
                <div v-if="isLoading" role="status">
                  <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
              <!-- Video Player -->
              <video v-if="isPlaying" controls autoplay class="w-full h-full">
                <source :src="video.videolink" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <!-- Video Metadata -->
            <div class="my-6">
              <!-- Loading Placeholder -->
              <div v-if="isLoading" role="status" class="animate-pulse">
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5 max-w-lg"></div>
                <div class="h-2 bg-gray-200 rounded-full mt-4 dark:bg-gray-700 max-w-4xl mb-2"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-3xl mb-2"></div>
              </div>
              <!-- Metadata Content -->
              <div v-else>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  {{ video.category }}
                </span>
                <p class="text-3xl text-gray-900 dark:text-white my-2">{{ video.title }}</p>
                <p class="text-base text-gray-900 dark:text-white my-2">{{ video.description }}</p>
              </div>
            </div>
          </div>
          <!-- Related Content Column -->
          <div class="px-4 lg:col-span-3 col-span-12 rounded-lg overflow-hidden bg-white dark:bg-gray-900 relative z-10">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Related Content</h2>
            <div v-if="relatedVideos.length === 0" class="text-gray-600 text-md font-thin dark:text-gray-400">
              <p>No related content found.</p>
            </div>
            <div v-else class="max-w-md mx-auto space-y-4">
              <div v-for="related in relatedVideos" :key="related.id" class="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg dark:bg-gray-800 dark:border-gray-700 cursor-pointer" @click="playRelatedVideo(related)">
                <img :src="related.thumbnail" alt="Thumbnail" class="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ related.title }}</h2>
                  <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{{ related.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-8"></div>
    </section>
  
  <FooterComp />
</template>


<script>
import axios from "axios";
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import blackBackground from "@/assets/img/darkbg.jpg";

export default {
  name: "PlayLayout",
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      isPlaying: false,
      isLoading: false,
      blackBackground: blackBackground,
      video: {},
      relatedVideos: [],
    };
  },
  mounted() {
    this.fetchVideoMetadata();
    window.scrollTo(0, 0); // Scroll to top of the page
  },
  methods: {
    async fetchVideoMetadata() {
  try {
    const videoId = this.$route.query.id; // Extract video ID from URL
    if (!videoId) throw new Error("No video ID provided");
    this.isLoading = true;

    const response = await axios.get(
      `https://niyander.com/projects/api/yts/vid.php?id=${videoId}`
    );

    // Filter the correct video by ID
    const videoData = response.data.find((video) => video.id == videoId);

    if (!videoData) throw new Error("Video not found");

    this.video = videoData; // Set main video data
    this.relatedVideos = videoData.related || []; // Set related videos
    this.isLoading = false;
  } catch (error) {
    console.error("Error fetching video metadata:", error);
    this.isLoading = false;
  }
},
    startVideo() {
      this.isPlaying = true;
    },
    playRelatedVideo(related) {
      this.$router.push({ query: { id: related.id } });
      this.isPlaying = false;

      this.video = { ...related };

      this.$nextTick(() => {
        this.isPlaying = true;
      });
    },
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
