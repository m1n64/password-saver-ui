<template>
  <nav>
<!--    <router-link to="/">Home</router-link>-->
  </nav>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store/index";
//PUSH

export default defineComponent({
  created() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!store.state.auth.status.loggedIn) {
      this.$router.push("/login")
    }
  }
})

</script>

<style lang="scss">

</style>
