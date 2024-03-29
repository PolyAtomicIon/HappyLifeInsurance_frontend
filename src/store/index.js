import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

const ProfileModule = {
    state: () => ({
        userToEdit: null,
        events: {
            0: [],
        },
        token: false,
        profile: {},
        editors: [],
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

            state.editors = data["editors"]
            data['editors'].forEach(element => {
                state.events[element.id] = element.entries;
            });

            state.shared = data["shared_with_me"]
            state.events[0] = data["entries"]

            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < state.events[j].length; i++) {
                    state.events[j][i].start = new Date(state.events[j][i].start);
                    state.events[j][i].end = new Date(state.events[j][i].end);
                }
            }
        },
        removeEditor(state, id) {

            if (!id)
                return

            let pos = null;

            for (let i = 0; i < state.editors.length; i++) {
                if (state.editors[i].id === id) {
                    pos = i;
                    break;
                }
            }

            if (pos === null)
                return

            state.editors.splice(pos, 1);
        },

        addEditor(state, email) {
            let a = {};
            a.email = email;
            a.id = state.editors.length + 1;
            a.fullName = "Bekzat Yernat";
            a.initials = "B Y";
            a.color = '#2196F3';
            state.editors.push(a);
        },
        setInBuilding(state, data) {
            state.inBuilding = data.status
            state.currentAutoRegisteredEntryID = data.id
        }
    },
    actions: {

        updateEvent({ commit }, entry) {

            commit("deleteEvent", entry);
            commit("addNewEvent", entry);

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
        editors(state) {
            return state.editors
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