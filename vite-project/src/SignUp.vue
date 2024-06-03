<template>
    <div class="all">
      <h2>Sign up for an account</h2>
      <form @submit.prevent="handleSignup">
        <div class="ed">
          <label for="email">Email: </label>
          <input id="email" type="email" v-model="email" />
        </div>
        <div class="pd">
          <label for="password">Password: </label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <button type="submit">Sign up!</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { supabase } from "./supabase";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const handleSignup = async () => {
        try {
          // Use the Supabase provided method to handle the signup
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
        } catch (error) {
          alert(error.error_description || error.message);
        }
      };
  
      return {
        email,
        password,
        handleSignup,
      };
    },
  };
  </script>

<style scoped>

.all{
  display: flex;
  justify-content: center;
}
.ed{
  margin-bottom: 5px;
}
.pd{
  margin-bottom: 8px;
}
</style>