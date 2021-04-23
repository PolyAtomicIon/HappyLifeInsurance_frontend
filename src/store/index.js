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
        updateEvent(state, entry) {
            let tmp = state.events
            for (let i = 0; i < tmp.length; i++) {
                if (entry.id === tmp[i].id) {
                    tmp[i] = entry;
                    console.log("FOUND AND UPDATED")
                    break
                }
            }

            state.events = tmp;
            console.log("NOT OFUND")
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
    actions: {},
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