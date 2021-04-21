<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <v-sheet rounded="lg" elevation="2">
          <!-- <v-list color="transparent">
            <v-list-item v-for="(value, key) in profileData" :key="key">
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ key }}:</b> {{ printData(Profile[value]) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item >
              <v-list-item-content>
                  <v-btn  @click="$router.push('/profile/permissions')" depressed class="secondary">User permissions</v-btn>
              </v-list-item-content>
            </v-list-item>

          </v-list> -->

          <shared-with-me />
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="12" md="8">
        <v-sheet height="80vh" rounded="lg" class="mb-10"  elevation="2">
          <div class="calendar-container">
            <calendar-app v-if="userToEdit" :types="types" />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
import CalendarApp from "../components/CalendarApp.vue";
import SharedWithMe from "../components/SharedWithMe.vue";
import { Units } from "dayspan";
import {mapGetters} from 'vuex';

export default {
  name: "App",
  data: () => ({
    profileData: {
      'Name': 'name',
      'Email': 'email',
      'Job position': 'job_position'
    },
    types: [
      {
        id: "M",
        label: "Edit past days",
        shortcut: "M",
        type: Units.MONTH,
        size: 1,
        focus: 0.4999,
        repeat: true,
        listTimes: false,
        updateRows: true,
        schedule: false,
      },
      // {id: 'W', label: 'Week', shortcut: 'W', type: Units.WEEK,  size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
      {
        id: "D",
        label: "Full Day",
        shortcut: "D",
        type: Units.DAY,
        size: 1,
        focus: 0.4999,
        repeat: true,
        listTimes: true,
        updateRows: true,
        schedule: false,
      },
    ],
  }),

  mounted() {
    console.log(this.$route)
    // this.userId = this.$route.params.userId;
  },

  computed: {
    ...mapGetters(['userToEdit']),
  },

  components: {
    CalendarApp,
    SharedWithMe
  },

  methods: {

    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  .calendar-container {
    /* height: calc(83% + 56px); */
    padding: 5px 0px;
    height: 88%;
    margin: auto;
  }

</style>