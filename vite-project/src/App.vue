<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { store } from "./store";
import { supabase } from "./supabase";
import Auth from './Auth.vue'
import { onMounted, watch } from 'vue'
import SignOut from './SignOut.vue'



onMounted(async () => {
  // initially verify if a user is logged in w supabase
  const { data: { user } } = await supabase.auth.getUser();
  store.state.user = user;
 

  // set up a listener to update when user changes either by logging in/out
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || session === null) {
      store.state.user = null;
    } else {
      store.state.user = session.user;
    }
   
  });
});

// changes in user state
watch(() => store.state.user, (newUser) => {

});


</script>

<template>
  <div class="outer">
  <sign-out v-if="store.state.user"/>
  <header>
<h1>hello</h1>
    <div class="wrapper">
      <Auth v-if="!store.state.user" />
      <HelloWorld v-else msg="Welcome to your dashboard"/>
    </div>

   
  </header>
</div>

  <RouterView />
</template>

<style scoped>

</style>
