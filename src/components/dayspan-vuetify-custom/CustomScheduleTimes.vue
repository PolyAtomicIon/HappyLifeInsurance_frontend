<template>
    <div class="ds-schedule-times my-4 mx-2">

        <div class="ds-time-row ds-time-row-margin">
            <div class="ds-time-cell">
                <v-text class="cell-name cell-name-lg">
                    Date: {{this.scheduleDate}}
                </v-text>
            </div>
        </div>

        <div v-if="!allDay">

            <div class="ds-time-row" v-for="(time, index) in schedule.times" :key="time">

                <!-- <div class="ds-time-cell"></div> -->

                <custom-schedule-time
                        class="ds-time-cell double"
                        :index="index"
                        :show-remove="hasTimes"
                        :value="schedule.times[ index ]"
                        :key="index"
                        :read-only="readOnly"
                        @add="addTime"
                        @remove="removeTime"
                        @change="changeTime"
                ></custom-schedule-time>

            </div>

        </div>

        <div class="ds-time-row">

            <!-- <div class="ds-time-cell">

                <v-checkbox
                        ref="allDayCheckbox"
                        hide-details
                        class="ma-2"
                        :label="labels.all"
                        :readonly="isReadOnly"
                        v-model="allDay"
                ></v-checkbox>

            </div> -->
           
            <div class="ds-time-cell">

                <v-text-field
                        single-line hide-details solo flat
                        type="number"
                        v-model.number="schedule.duration"
                        :disabled="isReadOnly"
                        prepend-icon="watch"
                        @input="triggerChange"
                ></v-text-field>

            </div>

            <div class="ds-time-cell">

                <v-select
                        single-line hide-details solo flat
                        :items="durationOptions"
                        v-model="schedule.durationUnit"
                        :disabled="isReadOnly"
                        @input="triggerChange"
                ></v-select>

            </div>

        </div>

        

    </div>

</template>

<script>
import { Time, Schedule, Functions as fn } from 'dayspan'
import CustomScheduleTime from '../dayspan-vuetify-custom/CustomScheduleTime.vue'

export default {

    name: 'dsScheduleTimes',

    components: {
        CustomScheduleTime
    },

    props:
        {
            schedule:
                {
                    required: true,
                    type: Schedule
                },

            readOnly:
                {
                    type: Boolean,
                    default: false
                },

            labels:
                {
                    validate (x) {
                        return this.$dsValidate(x, 'labels')
                    },
                    default () {
                        return this.$dsDefaults().labels
                    }
                },

            defaultTime:
                {
                    type: String,
                    default () {
                        return this.$dsDefaults().defaultTime
                    }
                }
        },

    computed:
        {
            durationOptions () {
                var singular = this.schedule.duration === 1

                var duringDay = [
                    {text: singular ? this.labels.minute : this.labels.minutes, value: 'minutes'},
                    {text: singular ? this.labels.hour : this.labels.hours, value: 'hours'}
                ]
                var allDay = [
                    // {text: singular ? this.labels.day : this.labels.days, value: 'days'},
                    // {text: singular ? this.labels.week : this.labels.weeks, value: 'weeks'},
                    // {text: singular ? this.labels.month : this.labels.months, value: 'months'}
                ]

                return this.allDay ? allDay : duringDay.concat(allDay)
            },

            hasTimes () {
                return this.schedule.times.length > 1
            },

            isReadOnly () {
                return this.readOnly || this.$dayspan.readOnly
            },

            scheduleDate(){
                let dayOfMonth = this.schedule.dayOfMonth.input[0];
                let month = this.schedule.month.input[0] + 1;
                let year = this.schedule.year.input[0];
                return dayOfMonth + '.' + month + '.' + year;
            }
        },

  // eslint-disable-next-line no-unused-vars
    data: vm => ({
        allDay: false
    }),

    watch:
        {
            schedule: {
                handler: 'updateAllDay',
                immediate: true
            },
            allDay: 'updateScheduleAllDay'
        },

    mounted(){
        console.log(this.schedule)
    },

    methods:
        {
            updateAllDay () {
                this.allDay = this.schedule.isFullDay()
            },

            updateScheduleAllDay (allDay) {
                if (this.schedule.isFullDay() !== allDay) {
                    this.$dayspan.getPermission('toggleAllDay',
                    // eslint-disable-next-line no-unused-vars
                        (prompted) => {
                            this.schedule.setFullDay(allDay)
                            this.triggerChange()
                        },
                        () => {
                            this.allDay = !allDay
                        }
                    )
                }
            },

            changeTime (ev) {
                ev.schedule = this.schedule
                ev.updated = false

                this.$emit('update', ev)

                if (!ev.handled && ev.schedule) {
                    ev.updated = ev.schedule.moveTime(ev.time, ev.next)
                    ev.handled = true
                }

                this.$emit('change', ev)
            },

            addTime (ev) {
                ev.time = Time.parse(this.defaultTime)
                ev.schedule = this.schedule

                if (ev.time) {
                    this.$emit('add', ev)

                    if (!ev.handled && ev.schedule) {
                        ev.schedule.times.push(ev.time)
                        ev.handled = true
                    }

                    this.$emit('change', ev)
                }
            },

            removeTime (ev) {
                this.$dayspan.getPermission('removeExistingTime', () => {
                    ev.schedule = this.schedule

                    this.$emit('remove', ev)

                    if (!ev.handled && ev.schedule && ev.time) {
                        ev.handled = ev.schedule.removeTime(ev.time)
                    }

                    this.$emit('change', ev)
                })
            },

            isLastTime (index) {
                return index === this.schedule.times.length - 1
            },

            triggerChange () {
                this.$emit('change', this.getEvent('change'))
            },

            getEvent (type, extra = {}) {
                return fn.extend({

                    type: type,
                    schedule: this.schedule,
                    handled: false,
                    $vm: this,
                    $element: this.$el

                }, extra)
            }
        }
}
</script>

<style scoped lang="scss">

    .ds-schedule-times {
        max-width: 436px;

        .ds-time-row-margin {
            margin-top: 24px;
            margin-bottom: 12px;
        }

        .ds-time-row {
            display: flex;

            .ds-time-cell {
                padding-right: 8px;
                flex: 1 0 0px;

                &.double {
                    padding-right: 16px;
                    flex: 2 0 0px;
                }
            }
            .cell-name {
                font-size: 18px;
                // background: red;
                color: rgb(93, 90, 90);
                width: 128px;
                padding: 24px 0;
            }
            
            .cell-name-lg {
                width: 208px;
            }
        }
    }

</style>
