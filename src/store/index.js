import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

const ProfileModule = {
    state: () => ({
        userToEdit: null,
        events: {
            0: [],
        },
    }),
    mutations: {
        setUserToEdit(state, data) {
            state.userToEdit = data;
        },
        addNewEvent(state, entry) {
            let u_id = state.userToEdit;
            if (u_id === null) {
                console.log("NO USER ID")
                return
            }

            if (!state.events[u_id]) {
                console.log("EMPTY EVENTS LIST")
                state.events[u_id] = []
            }
            state.events[u_id].push(entry);
        },
        deleteEvent(state, entry) {

            let index = null;
            let u_id = state.userToEdit;
            if (u_id === null)
                return

            for (let i = 0; i < state.events[u_id].length; i++) {
                if (entry.id === state.events[u_id][i].id) {
                    index = i;
                }
            }

            state.events[u_id].splice(index, 1);
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
            return state.events[state.userToEdit];
        }
    },
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main: ProfileModule,
    }
});