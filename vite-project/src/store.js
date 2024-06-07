/* import { reactive } from "vue"; */
import { ref } from 'vue'
import { defineStore } from 'pinia'
/* export const store = {
  state: reactive({
    user: {},
  }),
}; */
export const useUserStore = defineStore('user', {
  /* let user = ref({})
  function setUser(_user) {
    user = _user
  }
  return { user, setUser }
}) */
state: () => {
  return { user: {} }
},
// could also be defined as
// state: () => ({ count: 0 })
actions: {
  setUser(_user) {
    this.user = _user
  },
},
})