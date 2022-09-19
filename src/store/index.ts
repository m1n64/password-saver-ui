import { createStore } from 'vuex'
import {auth} from "@/store/auth.module";
import {passwords} from "@/store/passwords.module";

export default createStore({
  state: {
  /*  user: <IUser>{},
    loggedIn: <boolean>false,*/
  },
  getters: {
/*    getUser(state) {
      return state.user;
    }*/
  },
  mutations: {
/*    setUser(state, user: IUser) {
      state.user = user;
      state.loggedIn = true;
    }*/
  },
  actions: {
  },
  modules: {
    auth,
    passwords
  }
})
