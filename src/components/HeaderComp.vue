<template>
  <div class="relative">
    <!-- Header with Background Pattern -->
    <header class="relative bg-transparent border-gray-200 dark:bg-gray-900">
      <!-- Background Pattern -->
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              {{ $heading }}
            </span>
          </router-link>

          <!-- Toggle Button (visible on lg and larger screens) -->
          <button @click="toggleNavbar" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" :aria-expanded="showNavbar">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <!-- Navbar -->
          <div :class="showNavbar ? 'block' : 'hidden'" class="w-full lg:block lg:w-auto" id="navbar-default">
            <ul
              class="flex items-center font-medium flex-col px-6 lg:px-8 lg:rounded-2xl mt-4 mb-4 border border-gray-100 rounded-lg 
              bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <!-- Navigation Links -->
              <li>
                <router-link to="/"
                  :class="$route.path === '/' ? 'text-blue-600 dark:text-blue-600 ' : 'text-gray-900 dark:text-white '"
                  class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  aria-current="page">Home</router-link>
              </li>
              <li>
                <router-link to="/about"
                  :class="$route.path === '/about' ? 'text-blue-600 dark:text-blue-600 ' : 'text-gray-900 dark:text-white '"
                  class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About</router-link>
              </li>
              <li>
                <router-link to="/contact"
                  :class="$route.path === '/contact' ? 'text-blue-600 dark:text-blue-600 ' : 'text-gray-900 dark:text-white '"
                  class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</router-link>
              </li>
              <li v-if="!isAuthenticated">
                <router-link to="/signup"
                  :class="$route.path === '/signup' ? 'text-blue-600 dark:text-blue-600 ' : 'text-gray-900 dark:text-white '"
                  class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Signup</router-link>
              </li>
              <li v-if="!isAuthenticated">
                <router-link to="/login"
                  :class="$route.path === '/login' ? 'text-blue-600 dark:text-blue-600 ' : 'text-gray-900 dark:text-white '"
                  class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Login</router-link>
              </li>
              <li v-if="isAuthenticated">
                <router-link to="/profile"
                  :class="$route.path === '/profile' ? 'text-blue-600 dark:text-blue-600 ' : 'text-gray-900 dark:text-white '"
                  class="block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                  Profile
                </router-link>
              </li>
              <li v-if="isAuthenticated">
                <button @click="logout" type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-xs px-5 py-2 my-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">Logout</button>
              </li>
              <!-- Theme Toggle -->
              <li>
                <button @click="toggleTheme" id="theme-toggle" type="button"
                  class="text-gray-500 dark:text-gray-400 mb-3 lg:mb-0 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2">
                  <svg v-show="isDark" id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg v-show="!isDark" id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z">
                    </path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>



<script>
export default {
  name: 'HeaderComp',
  data() {
    return {
      isDark: false, // Tracks the theme state
      showNavbar: false, // Tracks the navbar visibility
    };
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
  mounted() {
    this.isDark =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
      window.location.href = '/';
    },
  },
};
</script>
