
<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="3" >
        <v-sheet rounded="lg" class="calendar-control-buttons"  elevation="2">
          
          <v-list color="transparent">

            <!-- <v-list-item>
              <v-list-item-content>
                <v-list-item-title >
                    <v-icon class="indigo--text font-weight-bold mb-1 mr-1"> mdi-clock </v-icon>
                    <span class="--text font-weight-bold">
                     Time {{ currentTime }}
                    </span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->

            <v-list-item v-if="currentStatus.inBuilding">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="primary-color-text font-weight-bold mb-1 mr-1"> mdi-checkbox-blank-circle </v-icon>
                  <span class="--text font-weight-bold">
                    Working
                  </span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item >
              <v-list-item-content>
                <v-btn 
                  color="primary-color" 
                  @click="isAddingEntry = true"
                >
                  <v-icon class="mr-2">
                    mdi-plus
                  </v-icon>
                  Register Entry
                </v-btn>
              </v-list-item-content>
            </v-list-item>

          </v-list>

        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet rounded="lg" class="mb-10" elevation="2">
          <div class="calendar-container">
            <calendar-app 
              :types="types"
            />
          </div>
        </v-sheet>

        <overlay-black 
          v-if="isAddingEntry"
        />
        <add-event-dialog
          class="event-dialog" 
          :isAdding="true"
          :overlay="isAddingEntry"
          :date="toDateString()"
          @closed="isAddingEntry = false"
        />

      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// import InterestingCard from '../components/InterestingCard.vue'
// import CalendarApp from "../components/CalendarApp.vue";
import AddEventDialog from '../components/time-tracker/AddEventDialog.vue';
import OverlayBlack from '../components/OverlayBlack.vue';
import CalendarApp from "../components/time-tracker/CalendarApp.vue";
import { Units } from "dayspan";

export default {
  data: () => ({
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
    currentStatus: {
      inBuilding: true,
    },
    currentTime: null,
    isAddingEntry: false,
  }),

  mounted(){
    // this.updateTime();
  },

  methods: {
    timeFormate(timeStamp) {
      // let year = new Date(timeStamp).getFullYear();
      // let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      // let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();

      this.currentTime = hh + ":" + mm + ":" + ss;
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
    // updateTime() {      	
    //   this.timeFormate(new Date());
    //   setInterval(this.updateTime, 1000);
    // }
  },

  components: {
    CalendarApp,
    AddEventDialog,
    OverlayBlack
    // InterestingCard
  },
};
</script>elevation

<style scoped>
.calendar-container {
  /* height: calc(83% + 56px); */
  /* padding: 5px 0px; */
  /* height: 88%; */
  margin: auto;
  /* width: 50vw; */
}
.calendar-control-buttons{
  /* width: 100%; */
}
</style>