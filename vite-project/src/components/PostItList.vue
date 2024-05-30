<template>
    <div>
        <button @click="addPostIt">Add Post-it Note</button>
        <div class="post-it-container">
        <PostIt
            v-for="(note, index) in postIts"
            :key="index"
            :initialContent="note.content"
            @update="updatePostIt(index, $event); $forceUpdate()"
            @delete="deletePostIt(index); $forceUpdate()"
          />
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import PostIt from './PostIt.vue';

const postIts = ref([]);
let x = 0
const addPostIt = () => {
  postIts.value.push({ content: '' , id: x});
  x+1
}

const updatePostIt = (index, newContent) => {
  postIts.value[index].content = newContent;

}
const deletePostIt = (index) => {
  const items = [...postIts.value]
  items.splice(index, 1);
  postIts.value = items;
}

</script>

<style lang="scss" scoped>

.post-it-container {
    display: flex;
    flex-wrap: wrap;
  }

</style>