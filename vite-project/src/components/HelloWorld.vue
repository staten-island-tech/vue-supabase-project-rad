``<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1>YOU SIGNED IN KHANGRABULASHION!</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About zi yang fan</RouterLink>
    <h3>
      GET OUTA HERE
      <a href="google.com" target="_blank" rel="noopener">Google</a> 
      <a href="https://classroom.google.com/c/NjI4MjQ3OTIyNTYy" target="_blank" rel="noopener">Class</a>.
    </h3>
  </div>
</template>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
