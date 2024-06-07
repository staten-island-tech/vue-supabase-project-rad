<template>
    <div class="signindeco">
      <h2 id="words">Sign in to your account</h2>
      <form @submit.prevent="handleSignin">
        <div class="emaildeco">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" />
        </div>
        <div class="passworddeco">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <button id="meow" type="submit">Sign in</button>
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
  
      const handleSignin = async () => {
        try {
          // Use the Supabase provided method to handle the signin
          const { error } = await supabase.auth.signInWithPassword({
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
        handleSignin,
      };
    },
  };
  </script>

<style scoped>

#email, #password{
  display: flex;
  align-items: row;
  font-family: 'Manrope', sans-serif;
}
#words{
  display: flex;
  text-align: center;
  justify-content: center;
  margin-right: 10px;
}
#meow{
  display: flex;
  text-align: center;
  font-family: 'Manrope', sans-serif;
}
.signindeco{
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.emaildeco{
  margin-bottom: 5px;
}
.passworddeco{
  margin-bottom: 8px;
}
</style>