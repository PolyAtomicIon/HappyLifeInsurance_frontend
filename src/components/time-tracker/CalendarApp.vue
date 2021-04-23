<template>
    <v-row>
      <v-col>
        <v-sheet height="64">
          <v-toolbar
            flat
          >
            <v-btn
              class="ds-skinny-button"
              depressed
              :icon="$vuetify.breakpoint.smAndDown"
              @click="setToday"
            >
              <span v-if="$vuetify.breakpoint.mdAndUp">Today</span>
              <v-icon v-else> mdi-calendar </v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="prev"
            >
              <v-icon small>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="next"
            >
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item> -->
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item> -->
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="250px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon @click='editEvent(selectedEvent)' >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click='removeEvent(selectedEvent)' >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="close()"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>

        <overlay-black 
          v-if="isEventDialog"
        />

        <add-event-dialog
          class="event-dialog" 
          v-if="selectedEvent"
          :description="selectedEvent.description"
          :date="toDateString(selectedEvent.start)"
          :time="toTimeString(selectedEvent.start)"
          :time2="toTimeString(selectedEvent.end)"
          :id="selectedEvent.id"
          :type="selectedEvent.name"
          :overlay="isEventDialog"
          @closed="isEventDialog = false, close()"
        />
      
      </v-col>
    </v-row>
</template>

<script>

  import AddEventDialog from '../time-tracker/AddEventDialog.vue';
  import OverlayBlack from '../OverlayBlack.vue';
  import { mapGetters, mapMutations } from 'vuex';

  export default {

    data: () => ({
      focus: '',
      type: 'day',
      typeToLabel: {
        month: 'Month',
        // week: 'Week',
        day: 'Day',
        // '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      isEventDialog: false,
    }),
    mounted () {
      this.$refs.calendar.checkChange();
    },
    methods: {
      ...mapMutations(['deleteEvent']),
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          console.log(event)
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          // setTimeout(() => {
            this.selectedOpen = true
          // }, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      openEventDialog(){
        this.isEventDialog = true;
      },
      editEvent(event){
        console.log(event.id)
        this.selectedOpen = false;
        this.isEventDialog = true;
        this.openEventDialog();
      },
      removeEvent(event){
        this.selectedOpen = false;
        this.deleteEvent(event);
      },
      close(){
        this.$refs.calendar.checkChange();
        this.selectedOpen = false;
        this.isEventDialog = false
      },
      // eslint-disable-next-line no-unused-vars
      toDateString(date){

          if( !date )
            return

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
      // eslint-disable-next-line no-unused-vars
      toTimeString(date){
        if( !date )
          return

        let hh = date.getHours() < 10? "0" + date.getHours(): date.getHours();
        let mm = date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes();
        // console.log(date)        
        return hh + ':' + mm;
      }
    },
    computed: {
      ...mapGetters(['events']),
    },
    components: {
      AddEventDialog,
      OverlayBlack,
    },
  }
</script>
