<script setup>
import HelloWorld from './components/HelloWorld.vue'
/* import { store } from "./store"; */
import { supabase } from "./supabase";
import Auth from './Auth.vue'
import { onMounted, watch } from 'vue'
import SignOut from './SignOut.vue'
import { useUserStore } from "@/store"

const userStore = useUserStore();
onMounted(async () => {
  
  // initially verify if a user is logged in w supabase
  const { data } = await supabase.auth.getUser();
  /* store.state.user = user; */
  userStore.setUser(data.user)
 

  // set up a listener to update when user changes either by logging in/out
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || session === null) {
      userStore.setUser(null)
    } else {
      userStore.setUser(session.user)
    }
   
  });
});

// changes in user state
/* watch(() => user, (newUser) => {

}); */


</script>

<template>
  <div class="outer">
  <sign-out v-if="userStore.user"/>
  <header>
    <div class="wrapper">
      <Auth v-if="!userStore.user" />
      <HelloWorld v-else msg="Welcome to your dashboard"/>
    </div>

   
  </header>
</div>

  <RouterView />
</template>

<style scoped>

:root {
  --main-font-color: #000000; 
}

body {
  color: var(--main-font-color); 
}

.outer {
  display: flex;
  justify-content: center;
  font-family: 'Manrope', sans-serif;
  color:#000000;
  background: #ffffff;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  margin-top: 10px;
  margin-bottom: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Manrope', sans-serif;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>