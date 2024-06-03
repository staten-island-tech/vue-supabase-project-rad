<template>
    <div class="buttonwrapper">
      
      <form @submit.prevent="handleSignOut">
        <div>
          <button class="delete" type="submit">Sign Out</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { supabase } from "./supabase";
  
  export default {
    setup() {
    
  
      const handleSignOut = async () => {
        try {
          // Use the Supabase provided method to handle the signin
          const { error } = await supabase.auth.signOut();
          if (error) throw error;
        } catch (error) {
          alert(error.error_description || error.message);
        }
      };
  
      return {
        handleSignOut,
      };
    },
  };
  </script>
<style>
.buttonwrapper {
  text-align: end;
  justify-content: center;
}

.delete{
  font-family: 'Manrope', sans-serif;
  justify-content: right;
  transition: all .5s;
}

.delete:hover {
    filter: grayscale(0);
    transform: scale(1.15);
}
</style>