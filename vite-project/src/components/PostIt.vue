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
  background-color: yellow;
  padding: 10px;
  margin: 10px;
  position: relative;
}
.buttons{
  position: absolute;
  bottom: 5px;
  right: 5px;
}
textarea {
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
}
.editing div {
  display: none;
}

.editing textarea {
  display: block;
}
</style>