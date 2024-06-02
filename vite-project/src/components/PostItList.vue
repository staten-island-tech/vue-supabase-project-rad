<template>
    <div>
        <button @click="addPostIt">Add Post-it Note</button>
        <div class="post-it-container">
        <PostIt
            v-for="(note, index) in postIts"
            :key="note.id"
            :initialContent="note.content"
          @update="updatePostIt(index, $event)"
            @delete="handleDelete(index)"
            
          />
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import PostIt from './PostIt.vue';

const postIts = ref([]);

const addPostIt = () => {
  postIts.value.push({ id: uuidv4(), content: '' });
}

const updatePostIt = (index, newContent) => {
  postIts.value[index].content = newContent;
}

const deletePostIt = (index) => {
  console.log("is it deleting:", index);
  postIts.value.splice(index,1);
}

const handleDelete = (index) => {
  deletePostIt(index);
}

/* const pls = () => {
postIts.value.newContent.splice(0,1); */
//}

</script>

<style lang="scss" scoped>

.post-it-container {
    display: flex;
    flex-wrap: wrap;
  }

</style>