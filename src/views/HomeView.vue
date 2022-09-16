<template>
  <div class="h-screen relative">
    <div class="container mx-auto w-full">
      <PasswordBlock
          v-for="(password, key) in passwords" :key="key"
          :password="password"
      />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from "@/store/index";
import PasswordService from "@/services/password.service";
import PasswordBlock from "@/components/PasswordBlock.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    PasswordBlock

  },
  data() {
    return {
      passwords: []
    }
  },
  mounted() {
    PasswordService.all()
      .then((response) => {
        this.passwords = response;
      });
  }
});
</script>
