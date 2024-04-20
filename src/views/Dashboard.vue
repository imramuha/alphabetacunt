<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div v-if="user.loggedIn">
            <div class="card-header">Welcome, {{ user.data.displayName }}</div>
            <div class="card-body">
              <div class="alert alert-success" role="alert">
                You are logged in!
                <BoardComponent></BoardComponent> <!-- Fix the component name here -->
                <div class="my-4">
                  <button @click.prevent="signOut" class="btn btn-primary">Log Out</button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="alert alert-danger" role="alert">
            You are being logged out!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebaseConfig'
import BoardComponent from './../components/BoardComponent' // Fix import

export default {
  name: "Dashboard",
  components: {
    BoardComponent // Remove quotes
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    const signOut = async () => {
      await store.dispatch('logOut');
      router.push('/');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    };

    return { user, signOut };
  }
};
</script>
