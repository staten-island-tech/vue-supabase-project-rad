<template>
  <div>
    <div class="add">
      <button class="add" @click="addPostIt">Add Post-it Note</button>
    </div>
      <div class="post-it-container">
      <PostIt
          v-for="(note, index) in postIts"
          :key="index"
          :initialContent="note.content"
        @update="updatePostIt(index, $event)"
          @delete="deletePostIt(index)"
          @pls="pls(index, $event)"
        />
      </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import PostIt from './PostIt.vue';

const postIts = ref([]);

const addPostIt = () => {
postIts.value.push({ content: '' });
}

const updatePostIt = (index, newContent) => {
postIts.value[index].content = newContent;
}

const deletePostIt = () => {
postIts.value.splice(0,1);
}

const pls = () => {
postIts.value.newContent.splice(0,1);
}
</script>

<style lang="scss" scoped>

.post-it-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

.add {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Manrope', sans-serif;
    transition: all .5s;
    color: rgb(233, 135, 151);
  }

.add:hover{
  transform: scale(1.15);
}
</style>