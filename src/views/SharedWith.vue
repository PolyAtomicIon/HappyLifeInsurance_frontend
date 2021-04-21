<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <v-sheet rounded="lg" elevation="2">
          <shared-with-me :isInEditor="true"/>
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