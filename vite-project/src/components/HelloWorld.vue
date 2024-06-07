<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

import PostItList from './PostItList.vue';


</script>

<template>
  <div class="greetings">
<!--     <h1 class="green">{{ msg }}</h1> -->
    <h3>Signed in. Welcome!</h3>
        
  </div>

  <div>
    <PostItList />
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

.greetings {
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  place-items: flex-start;
  filter: grayscale(25%);
  transition: all .5s;
  color: rgb(236, 141, 157);
}

.greetings:hover {
    filter: grayscale(0);
    transform: scale(0.9);
}

@media (min-width: 1024px) {
  .greetings h1{
    flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  .greetings h3 {
    text-align: left;
  }
}
</style>