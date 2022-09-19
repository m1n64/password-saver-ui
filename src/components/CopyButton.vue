<template>
  <font-awesome-icon icon="fa-regular fa-copy" class="mx-2 cursor-pointer text-gray-800 hover:text-black"  @click="copy()"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useToast} from "vue-toastification";

export default defineComponent({
  name: "CopyButton",
  setup(props) {
    const toast = useToast();

    return { toast };
  },
  watch: {

  },
  props: {
    text: String as () => ""
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.text);
      this.toast.info("Copied");
    }
  }
})
</script>

<style scoped>

</style>