import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

const ProfileModule = {
    state: () => ({
        userToEdit: null,
    }),
    mutations: {
        setUserToEdit(state, data) {
            state.userToEdit = data;
        },
    },
    actions: {},
    getters: {
        userToEdit(state) {
            return state.userToEdit;
        },
    },
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main: ProfileModule,
    }
});