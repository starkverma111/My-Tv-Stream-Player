<template>
    <div>
        <!-- Include the Navbar Component -->
        <HeaderComp />
        <!-- Main Content for Signup Page -->
        <section class="bg-white dark:bg-gray-900 h-screen">
            <div
                class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 animate__animated animate__fadeIn">
                <!-- Decorative Fancy Border Section -->
                <div class="overflow-hidden">
                    <img class="hidden md:block w-full rounded-2xl bg-stone-50 h-auto object-cover"
                        src="@/assets/img/girl8.png" alt="Dashboard image">
                </div>
                <!-- Text Content Section -->
                <div class="md:mt-0 text-left p-6">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Login
                    </h2>
                    <div class="space-y-6">
                        <!-- Title / Header -->
                        <h3 class="text-xl text-gray-900 dark:text-white">Welcome Back</h3>
                        <div v-if="loginError" class="text-red-500">
                            <span id="badge-dismiss-dark"
                                class="inline-flex items-center px-2 py-1 me-2 text-sm text-red-500 tracking-wide bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-300">
                                <svg class="me-2 w-4 h-4 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z" />
                                </svg>


                                {{ loginError }}
                                <button type="button" @click="dismissError"
                                    class="inline-flex items-center p-1 ms-4 text-sm text-gray-400 bg-transparent rounded-xs hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                                    aria-label="Remove">
                                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Remove badge</span>
                                </button>
                            </span>
                        </div>
                        <!-- Email Input -->
                        <div>
                            <label for="login-email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                E-mail
                            </label>
                            <input type="email" id="login-email"
                                class="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="name@company.com" required v-model="login.email" @input="clearError" />
                        </div>

                        <!-- Password Input -->
                        <div>
                            <label for="login-password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input type="password" id="login-password"
                                class="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••" required v-model="login.password" @input="clearError" />
                        </div>

                        <!-- Forgot Password Link -->
                        <div class="text-right">
                            <a href="#"
                                class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Forgot
                                Password?</a>
                        </div>

                        <!-- Login Button -->
                        <button type="submit" @click="LoginNow"
                            class="w-full px-5 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200">
                            Login
                        </button>
                        <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <router-link to="/signup"
                                class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up
                                now</router-link>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Include the Footer Component -->
        <FooterComp />
    </div>
</template>
<script>
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from '../components/FooterComp.vue';
import axios from "axios";

export default {
    name: "LoginPage",
    components: {
        HeaderComp,
        FooterComp,
    },
    data() {
        return {
            login: {
                email: "",
                password: ""
            },
            loginError: "",
        };
    },
    methods: {
        async LoginNow() {
            // Make sure to check if email and password are properly filled
            if (!this.login.email || !this.login.password) {
                this.loginError = "Please enter both email and password.";
                return;
            }

            try {
                const response = await axios.post(`${process.env.VUE_APP_API_LOGIN}`, {
                    email: this.login.email,
                    password: this.login.password,
                });

                if (response.data.success) {
                    console.log(response.data.success);
                    //console.log("Login successful!");
                    // Store the token and user details in localStorage
                    localStorage.setItem("authToken", response.data.token);
                    localStorage.setItem("authUser", JSON.stringify(response.data.user)); // Save user details (fname, lname, email)
                    // Redirect to the home page after login
                    window.location.href = '/';
                } else {
                    this.loginError = "Login failed: " + response.data.message;
                }
            } catch (error) {
                console.error("There was an error logging in:", error);
                //alert("An error occurred. Please try again.");
            }
        },

        // Function to dismiss the error badge
        dismissError() {
            this.loginError = "";
        },

        // Function to clear error message when the user starts typing
        clearError() {
            if (this.loginError) {
                this.loginError = "";
            }
        }
    }
};
</script>
