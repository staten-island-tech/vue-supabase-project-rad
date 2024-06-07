<template>
  <div>
      <button @click="addPostIt" autofocus>Add Post-it Note</button>
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

import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import PostIt from './PostIt.vue';
import { supabase } from '@/supabase';
const postIts = ref([]);
const init = async()=>{
const { data, error } = await supabase.from("postits").select(); 
postIts.value = data;
}
onMounted(init);
const addPostIt = async() => {
const newNote = { id: uuidv4(), content: '' };

const {error} = await supabase.from("postits").upsert(newNote)
if (!error){postIts.value.push(newNote);}
}

const updatePostIt = async(index, newContent) => {
postIts.value[index].content = newContent;
const {error} = await supabase.from("postits").update({content:newContent}).eq("id",postIts.value[index].id)
}

const deletePostIt = async(index) => {
console.log("is it deleting:", index);
const {error} = await supabase.from("postits").delete().eq("id",postIts.value[index].id)

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