<template>
    <div>
      <sign-up v-if="isSignUp" />
      <sign-in v-else />
      <button class="signupin" @click="isSignUp = !isSignUp">
        {{
          isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
        }}
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import SignUp from "./SignUp.vue";
  import SignIn from "./SignIn.vue";
  export default {
    components: { SignUp, SignIn },
    setup() {
      const isSignUp = ref(true);
  
      return {
        isSignUp,
      };
    },
  };
  </script>
  
  <style scoped>
  .signupin{
    display: flex;
    justify-content: right;
    font-family: 'Manrope', sans-serif;
  }
</style>