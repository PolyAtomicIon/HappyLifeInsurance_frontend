<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <v-sheet rounded="lg" elevation="2">
          <shared-with-me :isInEditor="true" @addEntry="isAddingEntry=true"/>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="12" md="8">
        <v-sheet rounded="lg" class="mb-10" elevation="2">
          <div class="calendar-container"  >
            <calendar-app 
              :types="types" 
              @updated="close()"
            />
          </div>
        </v-sheet>

        <overlay-black 
          v-if="isAddingEntry && userToEdit"
        />
        <add-event-dialog
          class="event-dialog" 
          :isAdding="true"
          :overlay="isAddingEntry"
          :date="toDateString()"
          @closed="close()"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
import CalendarApp from "../components/time-tracker/CalendarApp.vue";
import SharedWithMe from "../components/SharedWithMe.vue";
import AddEventDialog from "../components/time-tracker/AddEventDialog";
import OverlayBlack from "../components/OverlayBlack";
import { Units } from "dayspan";
import { mapGetters, mapMutations} from 'vuex';

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
    isAddingEntry: false,
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
    SharedWithMe,
    AddEventDialog,
    OverlayBlack
  },

  methods: {
    ...mapMutations(['setUserToEdit']),
    close(){
      this.isAddingEntry = false;
      console.log('CLOSED')
      // to watch the state
      let tmp = this.userToEdit
      this.setUserToEdit(null)
      // 
      setTimeout(() => { this.setUserToEdit(tmp); }, 100);
    },
    goBack: function () {
      this.$router.go(-1);
    },
    toDateString(){
        let date = new Date();

        let day = date.getDate();
        if( day < 10 )
            day = '0' + day
        let month = date.getMonth() + 1;
        if( month < 10 )
            month = '0' + month
        let year = date.getFullYear();
        // .substr(0, 10)
        console.log(day + ' ' + month + ' ' + year) 
        return year + '-' + month + '-' + day;
        // return day + '-' + month + '-' + year
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