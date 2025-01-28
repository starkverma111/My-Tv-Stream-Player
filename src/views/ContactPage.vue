<template>
    <div>
        <!-- Include the Navbar Component -->
        <HeaderComp />
        <!-- Main Content for Contact Page -->
        <section class="bg-white dark:bg-gray-900 h-screen">
            <div
                class="gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 animate__animated animate__fadeIn">
                <img class="w-full rounded-2xl bg-stone-50 dark:hidden" src="@/assets/img/girl3.png"
                    alt="dashboard image" />
                <img class="w-full rounded-2xl bg-transparent hidden dark:block" src="@/assets/img/girl3.png"
                    alt="dashboard image" />

                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get in Touch
                    </h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"> Have questions or feedback?
                        We're here to help! Reach out to us with any inquiries, and our team will get back to you as
                        soon as possible. Your thoughts and suggestions are always valued and help us improve your
                        experience.</p>
                    <div class="space-y-8">
                        <p  :class="feedbackClass" >{{ feedback }}</p>
                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                email</label>
                            <input type="email" id="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com" v-model="contact.email" required>
                        </div>
                        <div>
                            <label for="subject"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject"
                                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you" v-model="contact.subject" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                message</label>
                            <textarea id="message" rows="6"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Leave a comment..." v-model="contact.message"></textarea>
                        </div>
                        <button type="submit" @click="SendMessage"
                            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send
                            message</button>
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
    name: 'ContactPage',
    components: {
        HeaderComp,
        FooterComp,
    },
    data() {
        return {
            contact: {
                email: '',
                subject: '',
                message: '', // Fixed typo from "messgae"
            },
            feedback: '', // Stores feedback message
            feedbackClass: 'text-green-600', // Stores feedback message
        };
    },
    methods: {
        SendMessage() {
    if (this.contact.email !== "" && this.contact.subject !== "" && this.contact.message !== "") {
        this.feedbackClass = 'text-base text-green-900 dark:text-white animate__animated animate__fadeIn';
        this.feedback = 'Thank you for contacting us! We have received your message and will get back to you shortly.';
        this.contact = { email: '', subject: '', message: '' };
    } else {
        this.feedbackClass = 'text-base text-red-600 dark:text-white animate__animated animate__fadeIn ';
        this.feedback = 'Please fill out the form completely before submitting.';
    }

    // Automatically clear feedback after 2 seconds
    setTimeout(() => {
        this.feedback = '';
    }, 2000); // Duration in milliseconds
},

    },
};
</script>
<style scoped>
/* Add custom styles here if needed */
</style>

