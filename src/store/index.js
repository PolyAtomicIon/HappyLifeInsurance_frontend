import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const ProfileModule = {
    state: () => ({
        userToEdit: null,
        events: {
            0: [],
        },
        token: false,
        profile: {},
        shared: [],
        flexStatus: {},
        server_url: 'https://happylife-backend.herokuapp.com/',
        inBuilding: false,
        currentAutoRegisteredEntryID: null,
    }),
    mutations: {
        setFlexStatus(state, data) {
            state.flexStatus = data
        },
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
        },
        setToken(state, data) {
            state.token = data
        },
        setProfile(state, data) {

            state.profile = {
                "user_id": data['user_id'],
                "name": data['fullName'],
                "job_position": data["job_position"],
                "email": data["email"],
            }

            // state.editors = data["editors"]
            state.shared = data["shared_with_me"]

            let isInBuilding = false;

            state.events[0] = data["entries"]
            for (let i = 0; i < state.events[0].length; i++) {

                let start = state.events[0][i].start
                let end = state.events[0][i].end
                let type = state.events[0][i].name;

                state.events[0][i].start = new Date(start);
                state.events[0][i].end = new Date(end);


                if (start === end && type === 'Work hour (auto)') {
                    isInBuilding = true
                }

            }

            state.isInBuilding = isInBuilding
        },
        setInBuilding(state, data) {
            state.inBuilding = data.status
            state.currentAutoRegisteredEntryID = data.id
        }
    },
    actions: {

        updateEvent({ dispatch }, entry) {

            dispatch("deleteEvent", entry);
            dispatch("addNewEvent", entry);

        },

        addNewEvent({ state, commit }, entry) {
            axios.post(state.server_url + "add_entry", { entry })
                .then(
                    response => {
                        commit("addNewEvent", response.data)
                    }
                )
        },

        deleteEvent({ state, commit }, entry) {
            axios.post(state.server_url + "delete_entry", { entry })
                .then(
                    response => {
                        commit("deleteEvent", response.data)
                    }
                )
        },

        updateEventByID({ state, commit }, data) {

            let entry = null;
            let u_id = state.userToEdit;
            if (u_id === null)
                return

            for (let i = 0; i < state.events[u_id].length; i++) {
                if (data.entry_id === state.events[u_id][i].id) {
                    entry = state.events[u_id][i]
                    break
                }
            }

            commit("deleteEvent", entry);

            // console.log(data.end_time)
            entry.end = data.end_time
            console.log(entry)

            commit("addNewEvent", entry);

        },
    },
    getters: {
        userToEdit(state) {
            return state.userToEdit;
        },
        events(state) {
            return state.events[state.userToEdit];
        },
        isLogged(state) {
            return state.token
        },
        shared(state) {
            return state.shared
        },
        server_url(state) {
            return state.server_url
        },
        flexStatus(state) {
            return state.flexStatus
        },
        isInBuilding(state) {
            return {
                status: state.inBuilding,
                event_id: state.currentAutoRegisteredEntryID
            }
        }
    },
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main: ProfileModule,
    }
});