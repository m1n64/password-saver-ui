<template>
  <div>
    <RegisterLogin/>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import RegisterLogin from "@/components/RegisterLogin.vue";

export default defineComponent({
  name: "AuthView",
  components: {
    RegisterLogin
  }
})
</script>

<style scoped>

</style>