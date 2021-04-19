<template>

    <div class="ds-schedule mt-4"
         :class="classes">

        <div class="ds-schedule-span mb-2" v-if="showRange">

            <!-- Span -->
            <slot name="scheduleSpan" v-bind="{schedule, day}">

                <ds-schedule-span
                        :schedule="schedule"
                        :day="day"
                        :read-only="readOnly"
                ></ds-schedule-span>

            </slot>

        </div>

        <!-- <div class="ds-schedule-type-line">

            <div class="ds-schedule-type">

                <slot name="scheduleType" v-bind="{schedule, day, setType, custom}">

                    <ds-schedule-type
                            :day="day"
                            :schedule="schedule"
                            :read-only="readOnly"
                            @change="setType"
                            @custom="custom"
                    ></ds-schedule-type>

                </slot>

            </div>

        </div> -->

        <v-layout row wrap>

            <v-flex xs12>

                <!-- Times -->
                <slot name="scheduleTimes" v-bind="{schedule, day}">

                    <custom-schedule-times
                            :schedule="schedule"
                            :read-only="readOnly"
                    ></custom-schedule-times>

                </slot>

            </v-flex>
            <v-flex xs12 v-if="!isReadOnly">

                <slot name="scheduleFooter" v-bind="{schedule, day}"></slot>

                <!-- Custom -->
                <ds-schedule-type-custom-dialog
                        v-bind="{$scopedSlots}"
                        ref="customScheduler"
                ></ds-schedule-type-custom-dialog>

            </v-flex>
        </v-layout>

    </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
import { Day, Schedule } from 'dayspan'
import CustomScheduleTimes from '../dayspan-vuetify-custom/CustomScheduleTimes.vue'

export default {

    name: 'dsSchedule',
    
    components: {
        CustomScheduleTimes
    },

    props:
        {
            schedule:
                {
                    required: true,
                    type: Schedule
                },

            day:
                {
                    type: Day
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

            allowsRange:
                {
                    type: Boolean,
                    default () {
                        return this.$dsDefaults().allowsRange
                    }
                }
        },

  // eslint-disable-next-line no-unused-vars
    data: vm => ({}),

    computed:
        {
            showRange () {
                return this.allowsRange && !this.schedule.isSingleEvent()
            },

            classes () {
                return {
                    'ds-schedule-small': this.$vuetify.breakpoint.smAndDown
                }
            },

            isReadOnly () {
                return this.readOnly || this.$dayspan.readOnly
            }
        },

    methods:
        {
            custom () {
                this.$refs.customScheduler.edit(this.schedule, this.day)
            },

            setType (type) {
                this.$emit('type', type)
            }
        }
}
</script>

<style lang="scss">

    .ds-schedule {

        .ds-schedule-type {
            max-width: 436px;
            padding-right: 8px;
        }

        &.ds-schedule-small {

            .ds-schedule-type {
                width: 100%;
            }
        }

    }

</style>
