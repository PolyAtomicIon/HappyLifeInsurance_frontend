import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

const ProfileModule = {
    state: () => ({
        userToEdit: null,
        events: [],
    }),
    mutations: {
        setUserToEdit(state, data) {
            state.userToEdit = data;
        },
        addNewEvent(state, entry) {
            state.events.push(entry);
        },
        deleteEvent(state, entry) {

            let index = null;

            for (let i = 0; i < state.events.length; i++) {
                if (entry.id === state.events[i].id) {
                    index = i;
                }
            }

            state.events.splice(index, 1);
        }
    },
    actions: {

        updateEvent({ commit }, entry) {

            commit("deleteEvent", entry);
            commit("addNewEvent", entry);

        },
    },
    getters: {
        userToEdit(state) {
            return state.userToEdit;
        },
        events(state) {
            return state.events;
        }
    },
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main: ProfileModule,
    }
});