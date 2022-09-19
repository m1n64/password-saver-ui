<template>
  <div class="h-screen relative">
    <div class="container mx-auto w-full relative">
      <SearchPassword/>

      <div v-if="this.$store.state.passwords.passwords.length > 0 ">
        <PasswordBlock
            v-for="(password, key) in this.$store.state.passwords.passwords" :key="key"
            :password="password"
        />
      </div>
      <div v-else class="justify-center flex flex-col my-10 p-5 bg-white rounded-lg">
        <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="text-red-600 text-4xl" />
        <div class="text-center mt-2 text-lg text-gray-900">
          You don't have any passwords. You can add your passwords
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from "@/store/index";
import PasswordBlock from "@/components/PasswordBlock.vue";
import SearchPassword from "@/components/SearchPassword.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchPassword,
    PasswordBlock

  },
  created() {
    store.dispatch("passwords/get");
  }
});
</script>
