<template>
  <div class="my-4">
    <input type="text" class="w-full rounded-lg border-2 border-solid border-emerald-500 px-4 py-2 text-lg focus:outline-none focus:border-emerald-300" placeholder="Search..." v-model="searchText" @keyup="search()">
  </div>

  <div class="absolute w-full bg-white rounded-lg px-10 py-2 border-2 border-solid border-gray-500" v-if="passwords.length > 0">
    <div class="flex justify-between mb-2">
      <div>Results:</div>
      <font-awesome-icon icon="fa-regular fa-circle-xmark" class="cursor-pointer text-gray-800 hover:text-black" @click="close()" />
    </div>
    <hr>
    <PasswordBlock
        v-for="(password, key) in passwords" :key="key"
        :password="password"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store/index";
import IPassword from "@/interfaces/IPassword";
import PasswordBlock from "@/components/PasswordBlock.vue";

export default defineComponent({
  name: "SearchPassword",
  components: {
    PasswordBlock
  },
  data() {
    return {
      searchText: "",
      passwords: [] as IPassword[]
    }
  },
  methods: {
    search() : void {
      this.passwords = store.getters["passwords/getPasswordsByName"](this.searchText);
    },

    close() : void {
      this.passwords = []
    }
  }
})
</script>

<style scoped>

</style>