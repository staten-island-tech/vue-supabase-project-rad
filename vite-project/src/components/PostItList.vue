<template>
    <div>
        <button @click="addPostIt">Add Post-it Note</button>
        <div class="post-it-container">
        <PostIt
            v-for="(note, index) in postIts"
            :key="index"
            :initialContent="note.content"
            @update="updatePostIt(index, $event)"
            @delete="deletePostIt(index)"
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

const deletePostIt = (index) => {
  postIts.value.splice(index, 1);
}

</script>

<style lang="scss" scoped>

.post-it-container {
    display: flex;
    flex-wrap: wrap;
  }

</style>