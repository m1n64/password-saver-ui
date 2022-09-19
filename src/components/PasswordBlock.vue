<template>
  <div class="py-2 px-4 bg-white rounded-lg my-2">
    <div class="flex justify-between">
      <div class="font-bold">
        {{password.name}}
      </div>
      <div class="flex">
        <div v-html="password.category.icon" class="w-[20px] mx-2 category-icon"></div>
        <font-awesome-icon :icon="!dropped ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'" @click="changeDropdown(password.id)" class="mx-2 cursor-pointer" />
      </div>
    </div>
    <div class="my-2" v-if="dropped">
      <hr>
      <div class="my-2 " v-if="password.login">
        <span class="">Login: </span>
        <input type="text" class="data-border" readonly :value="password.login">
<!--        <span class="data-border">
          {{ password.login }}
        </span>-->
        <CopyButton
          :text="password.login"
        />
      </div>
      <div class="my-2">
        <span>Password: </span>
        <input type="text" class="data-border" readonly v-model="showedPassword">
<!--        <span class="data-border" ref="password-field">
        </span>-->
        <CopyButton
          :text="showedPassword"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import IPassword from "@/interfaces/IPassword";
import PasswordService from "@/services/password.service";
import CopyButton from "@/components/CopyButton.vue";

export default defineComponent({
  name: "PasswordBlock",
  components: {
    CopyButton,
    FontAwesomeIcon
  },
  props: {
    password: Object as () => IPassword
  },
  data() {
    return {
      dropped: false,
      showedPassword: ""
    }
  },
  methods: {
    changeDropdown(id: number) : void {
      if (!this.dropped) {
        PasswordService.decrypt(id)
            .then((resp) => {
              // @ts-ignore
              // this.$refs["password-field"].value = resp.password;
              this.showedPassword = resp.password;
            })
      }

      this.dropped = !this.dropped;
    }
  }
})
</script>

<style scoped>

</style>