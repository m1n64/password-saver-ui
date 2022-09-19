import {useToast} from "vue-toastification";
import PasswordService from "@/services/password.service";
import IPassword from "@/interfaces/IPassword";

const toast = useToast();

export const passwords = /*createStore(*/{
    namespaced: true,
    state: {
        passwords: <IPassword[]> []
    },
    getters: {
        getPasswordsByName: (state : any) => (name: string) => {
            if (name.length == 0) return [];
            return state.passwords.filter((password: IPassword) => password.name.indexOf(name) > -1);
        }
    },
    actions: {
        get({ commit }  : {commit: any}) {
            return PasswordService.all()
                .then(
                    passwords => {
                        commit("passwordSet", passwords)
                    }
                )
        }
    },
    mutations: {
        passwordSet(state: any, passwords: IPassword[]) {
            state.passwords = passwords;
        },
    }
};//);