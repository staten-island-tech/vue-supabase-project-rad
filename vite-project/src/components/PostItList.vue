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
          />
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import PostIt from './PostIt.vue';

let id = 0

const newpostIts = ref('');
const postIts = ref([])

function addPostIt() {
  postIts.value.push({ id: id++, text: newpostIts.value })
  newpostIts.value = ''
}

const updatePostIt = (post, newContent) => {
  postIts.value[post].content = newContent;
}

function deletePostIt(post) {
  postIts.value = post.value.filter((i) => i !== post)
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
  }
</style>