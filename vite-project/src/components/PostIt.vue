<template>
    <div class="post-it-note">
        <textarea v-if="isEditing" v-model="content"></textarea>
        <div v-else>{{ content }}</div>
      <div class="buttons">
        <button @click="toggleEdit">{{ isEditing ? 'Save' : 'Edit' }}</button>
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
      if (isEditing.value) {
        $emit('update', content.value);
      }
      isEditing.value = !isEditing.value;
    }
    
    </script>
    
<style lang="scss" scoped>
  .post-it-note {
    width: 200px;
    height: 200px;
    background-color: rgb(173, 111, 170);
    padding: 10px;
    margin-top: 30px;
    color: rgba(132, 24, 89, 0.827);
    margin: 10px;
    transition: all .5s;
    filter: grayscale(65%);
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
    font-family: 'Manrope', sans-serif;
}
  .buttons{
    position: absolute;
    bottom: 5px;
    right: 5px;
}
  button {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-family: 'Manrope', sans-serif;
}
      
  .editing div {
    display: none;
}
      
  .editing textarea {
    display: block;
} 
    </style>