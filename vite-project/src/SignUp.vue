<template>
    <div class="all">
      <h2 id="words">Sign up for an account</h2>
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
          <button id="meow" type="submit">Sign up!</button>
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
  margin-bottom: 5px;
}
#words{
  display: flex;
  text-align: center;
}
#meow{
  display: flex;
  text-align: center;
  font-family: 'Manrope', sans-serif;
}
#email, #password{
  display: flex;
  align-items: row;
  font-family: 'Manrope', sans-serif;
}
.ed{
  margin-bottom: 5px;
}
.pd{
  margin-bottom: 8px;
}
</style>