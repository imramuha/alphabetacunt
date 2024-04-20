import { createApp } from 'vue';
import App from './App.vue';
import { app } from './firebaseConfig'; // Import the Firebase app instance
import store from './store'; // Import your Vuex store
import router from "./routes/"; // 👍


createApp(App)
  .use(router)
  .use(store)
  .use(app)
  .mount('#app')