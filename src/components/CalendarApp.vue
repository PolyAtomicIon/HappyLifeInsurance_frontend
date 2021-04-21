<template>
  <div class="ds-expand ds-calendar-app">
    
    <v-app-bar
      flat
      class="ds-app-calendar-toolbar"
      color="white"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
     
      <slot name="today" v-bind="{setToday, todayDate, calendar}">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              class="ds-skinny-button"
              depressed
              :icon="$vuetify.breakpoint.smAndDown"
              @click="setToday"
            >
              <span v-if="$vuetify.breakpoint.mdAndUp">{{ labels.today }}</span>
              <v-icon v-else>{{ labels.todayIcon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ todayDate }}</span>
        </v-tooltip>
      </slot>

      <slot name="prev" v-bind="{prev, prevLabel, calendar}">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              icon
              depressed
              class="ds-light-forecolor ds-skinny-button"
              @click="prev"
            >
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
          </template>
          <span>{{ prevLabel }}</span>
        </v-tooltip>
      </slot>

      <slot name="next" v-bind="{next, nextLabel, calendar}">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              icon
              depressed
              class="ds-light-forecolor ds-skinny-button"
              @click="next"
            >
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </template>
          <span>{{ nextLabel }}</span>
        </v-tooltip>
      </slot>

      <slot name="summary" v-bind="{summary, calendar}">
        <h1 class="title ds-light-forecolor">{{ summary }}</h1>
      </slot>

      <v-spacer></v-spacer>

      <slot name="view" v-bind="{currentType, types}">
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              {{ currentType.label }}
              <v-icon>arrow_drop_down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="type in types" :key="type.id" @click="currentType = type">
              <v-list-item-content>
                <v-list-item-title>{{ type.label }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>{{ type.shortcut }}</v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </slot>
    </v-app-bar>

    <v-main class="ds-expand my-0 py-0">
      <v-container fluid fill-height class="ds-calendar-container">
        <ds-gestures @swipeleft="next" @swiperight="prev">
          <div v-if="currentType.schedule" class="ds-expand">
            <slot
              name="calendarAppAgenda"
              v-bind="{$scopedSlots, $listeners, calendar, add, edit, viewDay}"
            >
              <ds-agenda
                v-bind="{$scopedSlots}"
                v-on="$listeners"
                :read-only="readOnly"
                :calendar="calendar"
                @add="add"
                @edit="edit"
                @view-day="viewDay"
              ></ds-agenda>
            </slot>
          </div>

          <div v-else class="ds-expand">
            <slot
              name="calendarAppCalendar"
              v-bind="{$scopedSlots, $listeners, calendar, add, addAt, edit, viewDay, handleAdd, handleMove}"
            >
              <ds-calendar
                ref="calendar"
                v-bind="{$scopedSlots}"
                v-on="$listeners"
                :calendar="calendar"
                :read-only="readOnly"
                @add="add"
                @add-at="addAt"
                @edit="edit"
                @view-day="viewDay"
                @added="handleAdd"
                @moved="handleMove"
                @change="saveState"
              ></ds-calendar>
            </slot>
          </div>
        </ds-gestures>

        <!-- <slot
          name="calendarAppEventDialog"
          v-bind="{$scopedSlots, $listeners, calendar, eventFinish}"
        >
          <ds-event-dialog
            ref="eventDialog"
            v-bind="{$scopedSlots}"
            v-on="$listeners"
            :calendar="calendar"
            :read-only="readOnly"
            @saved="eventFinish"
            @actioned="eventFinish"
          ></ds-event-dialog>
        </slot> -->

        <slot
          name="calendarAppEventDialog"
          v-bind="{$scopedSlots, $listeners, calendar, eventFinish}"
        >
          <custom-event-dialog
            ref="eventDialog"
            v-bind="{$scopedSlots}"
            v-on="$listeners"
            :calendar="calendar"
            :read-only="readOnly"
            @saved="eventFinish"
            @actioned="eventFinish"
          ></custom-event-dialog>
        </slot>

        <slot
          name="calendarAppOptions"
          v-bind="{optionsVisible, optionsDialog, options, chooseOption}"
        >
          <v-dialog
            ref="optionsDialog"
            v-model="optionsVisible"
            v-bind="optionsDialog"
            :fullscreen="$dayspan.fullscreenDialogs"
          >
            <v-list>
              <template v-for="option in options">
                <v-list-item :key="option.text" @click="chooseOption( option )">{{ option.text }}</v-list-item>
              </template>
            </v-list>
          </v-dialog>
        </slot>

        <slot
          name="calendarAppPrompt"
          v-bind="{promptVisible, promptDialog, promptQuestion, choosePrompt}"
        >
          <v-dialog ref="promptDialog" v-model="promptVisible" v-bind="promptDialog">
            <v-card>
              <v-card-title>{{ promptQuestion }}</v-card-title>
              <v-card-actions>
                <v-btn color="primary" text @click="choosePrompt( true )">{{ labels.promptConfirm }}</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  color="secondary"
                  text
                  @click="choosePrompt( false )"
                >{{ labels.promptCancel }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </slot>

        <template slot="eventPopover" slot-scope="slotData">
            <ds-calendar-event-popover
              v-bind="slotData"
              :read-only="readOnly"
              @finish="saveState"
            ></ds-calendar-event-popover>
        </template>

        <template slot="eventCreatePopover" slot-scope="{placeholder, calendar}">
            <ds-calendar-event-create-popover
                    :calendar-event="placeholder"
                    :calendar="calendar"
                    :close="$refs.app.$refs.calendar.clearPlaceholder"
                    @create-edit="$refs.app.editPlaceholder"
                    @create-popover-closed="saveState"
            ></ds-calendar-event-create-popover>
        </template>

          <slot name="containerInside" v-bind="{events, calendar}">
            
          </slot>
      </v-container>
    </v-main>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import { Constants, Sorts, Calendar, Day, Units, Weekday, Month, DaySpan, PatternMap, Time, Op } from "dayspan";
  import Vue from 'vue';
  import CustomEventDialog from '../components/dayspan-vuetify-custom/CustomEventDialog.vue'

  export default {
    name: "dsCalendarApp",
    components: {
      CustomEventDialog
    },
    props: {
      events: {
        type: Array
      },
      navDrawer: {
        type: Boolean,
        default: false
      },
      calendar: {
        type: Calendar,
        default() {
          return Calendar.months();
        }
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      types: {
        type: Array,
        default() {
          return this.$dsDefaults().types;
        }
      },
      allowsAddToday: {
        type: Boolean,
        default() {
          return this.$dsDefaults().allowsAddToday;
        }
      },
      formats: {
        validate(x) {
          return this.$dsValidate(x, "formats");
        },
        default() {
          return this.$dsDefaults().formats;
        }
      },
      labels: {
        validate(x) {
          return this.$dsValidate(x, "labels");
        },
        default() {
          return this.$dsDefaults().labels;
        }
      },
      styles: {
        validate(x) {
          return this.$dsValidate(x, "styles");
        },
        default() {
          return this.$dsDefaults().styles;
        }
      },
      optionsDialog: {
        validate(x) {
          return this.$dsValidate(x, "optionsDialog");
        },
        default() {
          return this.$dsDefaults().optionsDialog;
        }
      },
      promptDialog: {
        validate(x) {
          return this.$dsValidate(x, "promptDialog");
        },
        default() {
          return this.$dsDefaults().promptDialog;
        }
      }
    },
  // eslint-disable-next-line no-unused-vars
    data: vm => ({
      drawer: false,
      optionsVisible: false,
      storeKey: 'dayspanState',
      options: [],
      promptVisible: false,
      promptQuestion: "",
      promptCallback: null,
      // defaultEvents: [
      //   {
      //     data: {
      //       title: 'Weekly Meeting',
      //       color: '#3F51B5'
      //     },
      //     schedule: {
      //       dayOfWeek: [Weekday.MONDAY],
      //       times: [9],
      //       duration: 30,
      //       durationUnit: 'minutes'
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'First Weekend',
      //       color: '#4CAF50'
      //     },
      //     schedule: {
      //       weekspanOfMonth: [0],
      //       dayOfWeek: [Weekday.FRIDAY],
      //       duration: 3,
      //       durationUnit: 'days'
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'End of Month',
      //       color: '#000000'
      //     },
      //     schedule: {
      //       lastDayOfMonth: [1],
      //       duration: 1,
      //       durationUnit: 'hours'
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Mother\'s Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.MAY],
      //       dayOfWeek: [Weekday.SUNDAY],
      //       weekspanOfMonth: [1]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'New Year\'s Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.JANUARY],
      //       dayOfMonth: [1]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Inauguration Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.JANUARY],
      //       dayOfMonth: [20]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Martin Luther King, Jr. Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.JANUARY],
      //       dayOfWeek: [Weekday.MONDAY],
      //       weekspanOfMonth: [2]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'George Washington\'s Birthday',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.FEBRUARY],
      //       dayOfWeek: [Weekday.MONDAY],
      //       weekspanOfMonth: [2]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Memorial Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.MAY],
      //       dayOfWeek: [Weekday.MONDAY],
      //       lastWeekspanOfMonth: [0]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Independence Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.JULY],
      //       dayOfMonth: [4]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Labor Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.SEPTEMBER],
      //       dayOfWeek: [Weekday.MONDAY],
      //       lastWeekspanOfMonth: [0]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Columbus Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.OCTOBER],
      //       dayOfWeek: [Weekday.MONDAY],
      //       weekspanOfMonth: [1]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Veterans Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.NOVEMBER],
      //       dayOfMonth: [11]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Thanksgiving Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.NOVEMBER],
      //       dayOfWeek: [Weekday.THURSDAY],
      //       weekspanOfMonth: [3]
      //     }
      //   },
      //   {
      //     data: {
      //       title: 'Christmas Day',
      //       color: '#2196F3',
      //       calendar: 'US Holidays'
      //     },
      //     schedule: {
      //       month: [Month.DECEMBER],
      //       dayOfMonth: [25]
      //     }
      //   }
      // ],
    }),

    watch: {
      navDrawer: function(val) {
        this.drawer = val;
      },
      events: "applyEvents",
      calendar: "applyEvents"
    },

    computed: {
      currentType: {
        get() {
          return (
            this.types.find(
              type =>
                type.type === this.calendar.type &&
                type.size === this.calendar.size
            ) || this.types[0]
          );
        },
        set(type) {
          this.rebuild(this.$dayspan.today, true, type);
        }
      },

      summary() {
        let small = this.$vuetify.breakpoint.xs;

        if (small) {
          return this.calendar.start.format(this.formats.xs);
        }

        let large = this.$vuetify.breakpoint.mdAndUp;

        return this.calendar.summary(false, !large, false, !large);
      },

      todayDate() {
        return this.$dayspan.today.format(this.formats.today);
      },

      nextLabel() {
        return this.labels.next(this.currentType);
      },

      prevLabel() {
        return this.labels.prev(this.currentType);
      },

      toolbarStyle() {
        let large = this.$vuetify.breakpoint.lgAndUp;

        return large ? this.styles.toolbar.large : this.styles.toolbar.small;
      },

      hasCreatePopover() {
        return !!this.$scopedSlots.eventCreatePopover;
      },

      canAddDay() {
        return (
          this.$dayspan.features.addDay &&
          !this.readOnly &&
          !this.$dayspan.readOnly
        );
      },

      canAddTime() {
        return (
          this.$dayspan.features.addTime &&
          !this.readOnly &&
          !this.$dayspan.readOnly
        );
      }
    },

    mounted() {
      if (!this.$dayspan.promptOpen) {
        this.$dayspan.promptOpen = (question, callback) => {
          this.promptVisible = false;
          this.promptQuestion = question;
          this.promptCallback = callback;
          this.promptVisible = true;
        };
      }

      this.loadState();

      this.setTypeToFullDay();

    },

    methods: {
      setTypeToFullDay(day){

        if( day === undefined )
          day = this.$dayspan.today;

        if( this.currentType == this.types[0] ){
          this.rebuild(day, true, this.types[1]);
          return false;
        }

        return true;
      },

      setState(state) {
        state.eventSorter = state.listTimes
          ? Sorts.List([Sorts.FullDay, Sorts.Start])
          : Sorts.Start;

        this.calendar.set(state);

        this.triggerChange();
      },

      applyEvents() {
        if (this.events) {
          this.calendar.removeEvents();
          this.calendar.addEvents(this.events);
        }
      },

      isType(type, aroundDay) {
        let cal = this.calendar;

        return (
          cal.type === type.type &&
          cal.size === type.size &&
          (!aroundDay || cal.span.matchesDay(aroundDay))
        );
      },

      rebuild(aroundDay, force, forceType) {

        let type = forceType || this.currentType || this.types[2];

        if (this.isType(type, aroundDay) && !force) {
          return;
        }

        let input = {
          type: type.type,
          size: type.size,
          around: aroundDay,
          eventsOutside: true,
          preferToday: false,
          listTimes: type.listTimes,
          updateRows: type.updateRows,
          updateColumns: type.listTimes,
          fill: !type.listTimes,
          otherwiseFocus: type.focus,
          repeatCovers: type.repeat
        };

        this.setState(input);
      },

      next() {
        this.calendar.unselect().next();

        this.triggerChange();
      },

      prev() {
        this.calendar.unselect().prev();

        this.triggerChange();
      },

      setToday() {
        this.rebuild(this.$dayspan.today, true, this.types[1]);
      },

      viewDay(day) {
        this.rebuild(day, false, this.types[0]);
      },

      edit(calendarEvent) {
        let eventDialog = this.$refs.eventDialog;

        eventDialog.edit(calendarEvent);
      },

      editPlaceholder(createEdit) {
        let placeholder = createEdit.calendarEvent;
        let details = createEdit.details;
        let eventDialog = this.$refs.eventDialog;
        let calendar = this.$refs.calendar;

        eventDialog.addPlaceholder(placeholder, details);
        eventDialog.$once("close", calendar.clearPlaceholder);
      },

      add(day) {

        if( !this.setTypeToFullDay(day) )
          return;

        if (!this.canAddDay) {
          console.log("decline")
          return;
        }

        let eventDialog = this.$refs.eventDialog;
        let calendar = this.$refs.calendar;
        let useDialog = !this.hasCreatePopover;

        calendar.addPlaceholder(day, true, useDialog);

        if (useDialog) {
          eventDialog.add(day);
          eventDialog.$once("close", calendar.clearPlaceholder);
        }
      },

      addAt(dayHour) {
        if( this.currentType == this.types[0] ){
          this.rebuild(dayHour, true, this.types[1]);
          return;
        }
        if (!this.canAddTime) {
          return;
        }

        let eventDialog = this.$refs.eventDialog;
        let calendar = this.$refs.calendar;
        let useDialog = !this.hasCreatePopover;
        let at = dayHour.day.withHour(dayHour.hour);

        calendar.addPlaceholder(at, false, useDialog);

        if (useDialog) {
          eventDialog.addAt(dayHour.day, dayHour.hour);
          eventDialog.$once("close", calendar.clearPlaceholder);
        }
      },

      addToday() {
        if (!this.canAddDay) {
          return;
        }

        let eventDialog = this.$refs.eventDialog;
        let calendar = this.$refs.calendar;
        let useDialog = !this.hasCreatePopover || !calendar;

        let day = this.$dayspan.today;

        if (!this.calendar.filled.matchesDay(day)) {
          let first = this.calendar.days[0];
          let last = this.calendar.days[this.calendar.days.length - 1];
          let firstDistance = Math.abs(first.currentOffset);
          let lastDistance = Math.abs(last.currentOffset);

          day = firstDistance < lastDistance ? first : last;
        }

        calendar && calendar.addPlaceholder(day, true, useDialog);

        if (useDialog) {
          eventDialog.add(day);

          calendar && eventDialog.$once("close", calendar.clearPlaceholder);
        }
      },

      handleAdd(addEvent) {
        if( this.currentType == this.types[0] ){
          return;
        }
        let eventDialog = this.$refs.eventDialog;
        let calendar = this.$refs.calendar;

        addEvent.handled = true;

        if (!this.hasCreatePopover) {
          if (addEvent.placeholder.fullDay) {
            eventDialog.add(addEvent.span.start, addEvent.span.days(Op.UP));
          } else {
            eventDialog.addSpan(addEvent.span);
          }

          eventDialog.$once("close", addEvent.clearPlaceholder);
        } else {
          calendar.placeholderForCreate = true;
        }
      },

      handleMove(moveEvent) {
        let calendarEvent = moveEvent.calendarEvent;
        let target = moveEvent.target;
        let targetStart = target.start;
        let sourceStart = calendarEvent.time.start;
        let schedule = calendarEvent.schedule;
        let options = [];

        moveEvent.handled = true;

        let callbacks = {
          cancel: () => {
            moveEvent.clearPlaceholder();
          },
          single: () => {
            calendarEvent.move(targetStart);
            this.eventsRefresh();
            moveEvent.clearPlaceholder();

            this.$emit("event-update", calendarEvent.event);
          },
          instance: () => {
            calendarEvent.move(targetStart);
            this.eventsRefresh();
            moveEvent.clearPlaceholder();

            this.$emit("event-update", calendarEvent.event);
          },
          duplicate: () => {
            schedule.setExcluded(targetStart, false);
            this.eventsRefresh();
            moveEvent.clearPlaceholder();

            this.$emit("event-update", calendarEvent.event);
          },
          all: () => {
            schedule.moveTime(sourceStart.asTime(), targetStart.asTime());
            this.eventsRefresh();
            moveEvent.clearPlaceholder();

            this.$emit("event-update", calendarEvent.event);
          }
        };

        options.push({
          text: this.labels.moveCancel,
          callback: callbacks.cancel
        });

        if (schedule.isSingleEvent()) {
          options.push({
            text: this.labels.moveSingleEvent,
            callback: callbacks.single
          });

          if (this.$dayspan.features.moveDuplicate) {
            options.push({
              text: this.labels.moveDuplicate,
              callback: callbacks.duplicate
            });
          }
        } else {
          if (this.$dayspan.features.moveInstance) {
            options.push({
              text: this.labels.moveOccurrence,
              callback: callbacks.instance
            });
          }

          if (this.$dayspan.features.moveDuplicate) {
            options.push({
              text: this.labels.moveDuplicate,
              callback: callbacks.duplicate
            });
          }

          if (
            this.$dayspan.features.moveAll &&
            !schedule.isFullDay() &&
            targetStart.sameDay(sourceStart)
          ) {
            options.push({
              text: this.labels.moveAll,
              callback: callbacks.all
            });
          }
        }

        this.options = options;
        this.optionsVisible = true;
      },

      chooseOption(option) {
        if (option) {
          option.callback();
        }

        this.optionsVisible = false;
      },

      choosePrompt(yes) {
        this.promptCallback(yes);
        this.promptVisible = false;
      },
  // eslint-disable-next-line no-unused-vars
      eventFinish(ev) {
        // console.log(ev.id);

        // if( ev.id === undefined )
        //   ev.id = 165;

        // console.log(ev);
        this.triggerChange();
      },

      eventsRefresh() {
        this.calendar.refreshEvents();

        this.triggerChange();
      },

      triggerChange() {
        this.saveState();
        this.$emit("change", {
          calendar: this.calendar
        });
      },

      saveState()
      {
        let state = this.calendar.toInput(true);
        console.log(this.calendar);
        let json = JSON.stringify(state);

        localStorage.setItem(this.storeKey, json);
      },

      loadState()
      {
        let state = {};

        try
        {
          let savedState = JSON.parse(localStorage.getItem(this.storeKey));

          if (savedState)
          {
            state = savedState;
            state.preferToday = false;
          }
        }
        catch (e)
        {
          // eslint-disable-next-line
          console.log( e );
        }

        if (!state.events || !state.events.length)
        {
          state.events = this.defaultEvents;
        }

        state.events.forEach(ev =>
        {
          let defaults = this.$dayspan.getDefaultEventDetails();

          ev.data = Vue.util.extend( defaults, ev.data );
        });

        this.setState( state );
      }
    }
  };
</script>

<style lang="scss">
.ds-app-calendar-toolbar {
  .v-toolbar__content {
    border-bottom: 1px solid rgb(224, 224, 224);
  }
}

.ds-skinny-button {
  margin-left: 2px !important;
  margin-right: 2px !important;
}

.v-main{
  padding-top: 0px;
}

.ds-expand {
  width: 100%;
  height: 100%;
}

.ds-calendar-container {
  padding: 0px !important;
  position: relative;
}

.v-btn--floating.ds-add-event-today {
  .v-icon {
    width: 24px;
    height: 24px;
  }
}

.v-btn--flat,
.v-text-field--solo .v-input__slot {
  background-color: #f5f5f5 !important;
  margin-bottom: 8px !important;
}

</style>
