
<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="3" >
        <v-sheet rounded="lg" class="calendar-control-buttons"  elevation="2">
          
          <v-list color="transparent">

            <!-- <v-list-item>
              <v-list-item-content>
                <v-list-item-title >
                    <v-icon class="primary-color-text font-weight-bold mb-1 mr-1"> mdi-clock </v-icon>
                    <span class="--text font-weight-bold">
                     Time 07:22 AM
                    </span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->

            <v-list-item v-if="isInBuilding.status">
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="primary-color-text font-weight-bold mb-1 mr-1"> mdi-checkbox-blank-circle </v-icon>
                  <span class="--text font-weight-bold">
                    In Building
                  </span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-else>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon class="red--text font-weight-bold mb-1 mr-1"> mdi-checkbox-blank-circle </v-icon>
                  <span class="--text font-weight-bold">
                    Not in Building 
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

            <v-list-item >
              <v-list-item-content class="d-flex justify-space-between">
                  <v-btn 
                    color="secondary-color"
                    min-width="96px" 
                    :disabled="isInBuilding.status"
                    @click="enterTheBuilding()"
                  >
                    <v-icon class="mr-2">
                      mdi-login
                    </v-icon>
                    Enter
                  </v-btn>

                  <v-btn 
                    color="secondary-color" 
                    min-width="96px" 
                    class="mt-2"
                    :disabled="!isInBuilding.status"
                    @click="leaveTheBuilding()"
                  >
                    <v-icon class="mr-2">
                      mdi-logout
                    </v-icon>
                    Leave
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
              @updated="updateFrame()"
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
import {mapActions, mapGetters, mapMutations} from 'vuex'

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
    if( !this.isLogged ){
      this.$router.push('login')
    }
    this.setUserToEdit(0);
  },

  computed: {
    ...mapGetters(['userToEdit', 'isLogged', 'isInBuilding', 'events']),
  },

  methods: {
    ...mapMutations(['setUserToEdit', 'setInBuilding', 'addNewEvent']),
    ...mapActions(['updateEventByID']),
    enterTheBuilding(){
      let current_time = this.toTimeString(new Date());
      let start = new Date(`${this.toDateString()}T${current_time}:00`)

      // console.log(start)
      // console.log(end)

      let new_id = 1;
      if( this.events ){
          new_id = this.events.length + 1;
      }

      let event = {
          timed: true,
          name: 'Work hour (auto)',
          start: start,
          end: start,
          color: 'primary-color',
          description: '',
          id: new_id
      }

      console.log(event)
      this.addNewEvent(event)
      this.setInBuilding({
        status: true, 
        id: new_id
      })

    },
    leaveTheBuilding(){
      let current_time = this.toTimeString(new Date());
      let time = new Date(`${this.toDateString()}T${current_time}:00`)
      this.updateEventByID({
        entry_id: this.isInBuilding.event_id, 
        end_time: time,
      });
      this.setInBuilding({
        status: false, 
        id: null
      })
      
    },
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
    updateFrame(){
      console.log('Updated')
      // to watch the state
      let tmp = this.userToEdit
      this.setUserToEdit(null)
      // 
      setTimeout(() => { this.setUserToEdit(tmp); }, 100);
    },
    // eslint-disable-next-line no-unused-vars
    toTimeString(date){
      if( !date )
        return

      let hh = date.getHours() < 10? "0" + date.getHours(): date.getHours();
      let mm = date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes();
      // console.log(date)        
      return hh + ':' + mm;
    }
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
</script>

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