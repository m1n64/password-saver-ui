<template>
  <div class="py-2 px-4 bg-white rounded-lg my-2">
    <div class="flex justify-between">
      <div>
        {{password.name}}
      </div>
      <div>
        {{ password.category.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import IPassword from "@/interfaces/IPassword";

export default defineComponent({
  name: "PasswordBlock",
  props: {
    password: IPassword
  }
})
</script>

<style scoped>

</style>