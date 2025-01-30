<template>
    <section class="dark:bg-gray-900">
        <div class="relative">
            <!-- Background Pattern -->
            <div class="absolute inset-0">
                <div
                    class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                </div>
            </div>
            <!-- Hero Content -->
            <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div class="grid max-w-screen-xl px-4 py-2 mx-auto  lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-6 text-center p-2 md:p-4">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                            {{ $heading }}</h1>
                        <p
                            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                            {{ $subheading }}
                        </p>
                        <a href="#" @click="ReleaseWatch"
                            class=" inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300
			rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Pre
                            Release Watch Now Free </a>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-6 lg:flex max-w-2xl "><img
                            class="object-cover h-full max-h-96 rounded-xl w-[600px] "
                            src="https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_1280.jpg" alt="mockup">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SliderComp', // Name your component
    data(){
        return{
            latest: 1,
        }
    },
    methods:{
        ReleaseWatch(){
            this.$router.push({
        name: "PlayPage",
        query: {
          id: this.latest,
        },
      });
        }
    },
};
</script>
<style></style>