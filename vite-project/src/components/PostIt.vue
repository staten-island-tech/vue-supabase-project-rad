<template>
  <div class="post-it-note">
    <textarea v-if="isEditing" v-model="content"></textarea>
    <div v-else>{{ content }}</div>
    <div class="buttons">
      <button @click="$emit('update', content)">{{ isEditing ? 'Save' : 'Edit' }}</button>
      <button @click="$emit('delete')">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  initialContent: {
    type: String,
    default: '',
  }
});

const content = ref(props.initialContent);
const isEditing = ref(true);

const toggleEdit = () => {
  /* if (isEditing.value) { */
    $emit('update', content.value);
  /* }
  isEditing.value = !isEditing.value; */
}

</script>

<style lang="scss" scoped>
  .post-it-note {
    width: 200px;
    height: 200px;
    background-color: rgb(173, 111, 170);
    padding: 10px;
    margin-top: 30px;
    margin: 10px;
    transition: all .5s;
    filter: grayscale(50%);
    position: relative;
    font-family: 'Manrope', sans-serif;
}
  .post-it-note:hover{
    filter: grayscale(0);
    transform: scale(1.1);
    }
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    color: rgb(189, 54, 76);
    font-family: 'Manrope', sans-serif;
}
  .buttons{
    position: absolute;
    bottom: 5px;
    right: 5px;
}

  .editing div {
    display: none;
}
      
  .editing textarea {
    display: block;
} 
    </style>