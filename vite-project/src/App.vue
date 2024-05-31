<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { store } from "./store";
import { supabase } from "./supabase";
import Auth from './Auth.vue'
import { onMounted } from 'vue'
import SignOut from './SignOut.vue'
onMounted(()=>{
  // we initially verify if a user is logged in with Supabase
  store.state.user = supabase.auth.getUser();
    // we then set up a listener to update the store when the user changes either by logging in or out
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT" || session === null) {
        store.state.user = null;
      } else {
        store.state.user = session.user;
      }
    });

    return {
      store,
    };
})
</script>

<template>
  <div class="outer">
  <sign-out v-if="store.state.user"/>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <Auth v-if="!store.state.user" />
      <HelloWorld v-else msg="meow"
       />

      <nav>
       <!--  <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About zi yang fan</RouterLink> -->
      </nav>
    </div>
  </header>
</div>
 <!--  <input id="ea" type="text" value="">
 -->
  <RouterView />
</template>

<style scoped>
.outer {
  display: flex;
  flex-direction: column;
}
header {
  line-height: 1.5;
  max-height: 100vh;
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
