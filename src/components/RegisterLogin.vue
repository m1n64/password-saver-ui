<template>
  <div class="main-block">
    <div class="flex flex-row">
      <div class="px-2 cursor-pointer border-b-2 border-solid hover:border-emerald-500" :class="{'border-emerald-500': tab.id === currentTab}" v-for="(tab, key) in tabs" :key="key" @click="switchTab(tab.id)">{{ tab.name }}</div>
    </div>

    <div v-if="currentTab === 1">
      <div class="text-lg py-2">
        <span class="">Вход:</span>
      </div>
      <div class="flex flex-col mb-3">
        <label>Email</label>
        <input type="text" ref="email" class="input-main">
      </div>

      <div class="flex flex-col mb-3">
        <label>Пароль</label>
        <input type="password" ref="password" class="input-main">
      </div>

      <button class="btn-main" @click="login()">Войти</button>
    </div>

    <div v-if="currentTab === 2">
      <div class="text-lg py-2">
        <span class="">Регистрация:</span>
      </div>

      <div class="flex flex-col mb-3">
        <label>Имя</label>
        <input type="text" ref="name_reg" class="input-main">
      </div>

      <div class="flex flex-col mb-3">
        <label>Email</label>
        <input type="text" ref="email_reg" class="input-main">
      </div>

      <div class="flex flex-col mb-3">
        <label>Пароль</label>
        <input type="password" ref="password_reg" class="input-main">
      </div>

      <button class="btn-main" @click="register()">Регистрация</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IUserLoginData from "@/interfaces/IUserLoginData";
import {useToast} from "vue-toastification";
import store from "@/store/index";

export default defineComponent({
  name: "RegisterLogin",
  setup() {
    const toast = useToast();

    return {toast};
  },
  updated() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (store.state.auth.loggedIn) this.$router.push("/");
  },
  data(){
    return {
      tabs: [
        {
          name: "Вход", id: 1
        },
        {
          name: "Регистрация", id: 2
        }
      ],
      currentTab: 1,
      cities: []
    }
  },
  methods: {
    login() : any {
      try {
        const data: IUserLoginData = {
          name: "",
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          email: this.$refs.email.value,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          password: this.$refs.password.value,
        }

        store.dispatch("auth/login", data).then((response) => {
          this.$router.push("/");
        }, (error)=>{
          console.log(error)
        });
      } catch (E) {
        console.log(E);
        this.toast.error("Unknown error");
      }
    },

    register() : void {
      try {
        const data: IUserLoginData = {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          name: this.$refs.name_reg.value,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          email: this.$refs.email_reg.value,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          password: this.$refs.password_reg.value

        }

        store.dispatch("auth/register", data).then((response) => {
          this.$router.push("/");
        }, (error)=>{
          console.log(error)
        });
      } catch (E) {
        console.log(E);
        this.toast.error("Unknown error");
      }
    },

    switchTab(id: number) : void {
      this.currentTab = id
    }
  }
})
</script>

<style scoped>

</style>