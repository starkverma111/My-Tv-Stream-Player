import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Set global heading and subheading
app.config.globalProperties.$heading = process.env.VUE_APP_HEADING || 'Default Heading';
app.config.globalProperties.$subheading = process.env.VUE_APP_SUBHEADING || 'Default Subheading';

app.use(router); // Use the router in the app
app.mount('#app');
