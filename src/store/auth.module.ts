import AuthService from '../services/auth.service';
import IUser from "@/interfaces/IUser";
import IUserLoginData from "@/interfaces/IUserLoginData";
import {useToast} from "vue-toastification";
import IApiResponse from "@/interfaces/IApiResponse";

const user = JSON.parse(<string>localStorage.getItem('user'));

const initialState = user
    ? { status: { loggedIn: true }, user}
    : { status: { loggedIn: false }, user: null };

const toast = useToast();

export const auth = /*createStore(*/{
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }  : {commit: any}, user : IUserLoginData) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user.data);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit } : {commit: any}) {
            AuthService.logout();
            commit('logout');
        },
        register({ commit } : {commit: any}, user: IUserLoginData) {
            return AuthService.register(user).then(
                user => {
                    commit('registerSuccess', user.data);

                    return Promise.resolve(user);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state: any, user: IUser) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state: any) {
            toast.error("Ошибка Входа! Провертье правильность ваших данных");
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state: any ) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state: any, user: IUser) {
            state.status.loggedIn = true;
            state.user = user;
            toast.success("Успешная регистрация. Спасибо!");
        },
        registerFailure(state: any) {
            toast.error("Ошибка регистрации! Провертье правильность ваших данных");
            state.status.loggedIn = false;
        }
    }
};//);