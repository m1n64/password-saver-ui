<template>
  <div class="absolute px-[50%] top-0 right-0 bg-opacity-75 bg-black h-screen z-[999]">
    <div class="pt-[40vh] px-full">
      <font-awesome-icon icon="fa-solid fa-circle-notch" class="text-orange-500 text-6xl" spin/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "GoodPreloader",
  components: {
    FontAwesomeIcon
  }
})
</script>

<style scoped>

</style>