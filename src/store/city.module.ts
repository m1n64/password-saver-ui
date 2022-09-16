import {useToast} from "vue-toastification";

const selCity = JSON.parse(<string>localStorage.getItem('city'));

const initialState = selCity ?
    { currentCity: selCity, status: { selected: true} } :
    { currentCity: null, status: { selected: false } };

const toast = useToast();

export const city = /*createStore(*/{
    namespaced: true,
    state: initialState,
    actions: {

    },
    mutations: {

    }
};//);