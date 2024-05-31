<template>
    <div class="post-it-note">
        <textarea v-if="isEditing" v-model="content"></textarea>
        <div v-else>{{ content }}</div>
        <button @click="toggleEdit">{{ isEditing ? 'Save' : 'Edit' }}</button>
        <button @click="$emit('delete')">Delete</button>
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
        background-color: yellow;
        padding: 10px;
        margin: 10px;
        position: relative;
        font-family: 'Manrope', sans-serif;
      }
      
      textarea {
        width: 100%;
        height: 100%;
        border: none;
        resize: none;
        font-family: 'Manrope', sans-serif;
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