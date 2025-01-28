<template>
    <div>
        <!-- Include the Navbar Component -->
        <HeaderComp />
        <!-- Main Content for Signup Page -->
        <section class="bg-white dark:bg-gray-900 h-screen">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 animate__animated animate__fadeIn">
                <!-- Decorative Fancy Border Section -->
                <div class="overflow-hidden">
                    <img class="hidden md:block w-full rounded-2xl bg-stone-50 h-auto object-cover" src="@/assets/img/girl6.png" alt="Dashboard image">
                </div>
                <!-- Text Content Section -->
                <div class="md:mt-0 text-left p-6">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Sign Up
                    </h2>
                    <div class="space-y-4">
                        <!-- Error Badge -->
                        <div v-if="signupError" class="text-red-500">
                            <span id="badge-dismiss-dark" class="inline-flex items-center px-2 py-1 me-2 text-sm text-red-500 tracking-wide bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-300">
                                <svg class="me-2 w-4 h-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z" />
                                </svg>
                                {{ signupError }}
                                <button type="button" @click="dismissError" class="inline-flex items-center p-1 ms-4 text-sm text-gray-400 bg-transparent rounded-xs hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" aria-label="Remove">
                                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Remove badge</span>
                                </button>
                            </span>
                        </div>

                        <!-- Form Inputs -->
                    <div v-show="!hideForm" class="space-y-4">
                        <div class="flex space-x-6">
                            <div class="flex-1">
                                <label for="signup-fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Fname
                                </label>
                                <input type="text" id="signup-fname" class="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required v-model="signup.fname" />
                            </div>
                            <div class="flex-1">
                                <label for="signup-lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Lname
                                </label>
                                <input type="text" id="signup-lname" class="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="surname" required v-model="signup.lname" />
                            </div>
                        </div>

                        <div>
                            <label for="signup-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="signup-email" class="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required v-model="signup.email" />
                        </div>

                        <div>
                            <label for="signup-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="signup-password" class="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required v-model="signup.password" />
                        </div>

                        <div>
                            <label for="signup-cpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input type="password" id="signup-cpassword" class="block w-full mb-4 p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required v-model="signup.cpassword" />
                            <p v-if="signup.password && signup.cpassword && signup.password !== signup.cpassword" class="text-red-500 text-xs mt-1">
                                Passwords do not match.
                            </p>
                        </div>
                        <div>
                        <!-- Sign up button -->
                        <button type="submit" @click="SignupNow" class="w-full px-5 py-3 mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Sign up now
                        </button>
                        <p class="mt-6 text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <router-link to="/login" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</router-link>
                                </p> 
                        </div>
                    </div>
                        <p v-if="successfullMessage" class="text-lg text-green-900 dark:text-white border mt-6">{{ successfullMessage }}
                            <router-link to="/login" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Go to Login Page</router-link></p>
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
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
    name: 'SignupPage',
    components: {
        HeaderComp,
        FooterComp
    },
    data() {
        return {
            signup: {
                fname: "",
                lname: "",
                email: "",
                password: "",
                cpassword: ""
            },
            signupError: "",
            successfullMessage: "",
            hideForm: false,
        };
    },
    methods: {
        async SignupNow() {
            this.signupError = "";

            // Check if all fields are filled in
            if (!this.signup.fname || !this.signup.lname || !this.signup.email || !this.signup.password || !this.signup.cpassword) {
                this.signupError = "Please fill in all fields.";
                return;
            }

            // Check if the passwords match
            if (this.signup.password !== this.signup.cpassword) {
                this.signupError = "Passwords do not match.";
                return;
            }

            try {
                const response = await axios.post(`${process.env.VUE_APP_API_SIGNUP}`, {
                    action: "signup",
                    fname: this.signup.fname,
                    lname: this.signup.lname,
                    email: this.signup.email,
                    password: this.signup.password
                });

                if (response.data.success) {
                    this.successfullMessage = "Thank you for registering! Please visit the login page to access your account.";
                    this.hideForm = true;  // Hide the form after successful signup
                    this.signup.fname = "";
                    this.signup.lname = "";
                    this.signup.email = "";
                    this.signup.password = "";
                    this.signup.cpassword = "";
                } else {
                    this.signupError = response.data.message;
                }
            } catch (error) {
                console.error("Error signing up:", error);
                alert("An error occurred. Please try again.");
            }
        },

        // Function to dismiss the error badge
        dismissError() {
            this.signupError = "";
        }
    }
};
</script>
