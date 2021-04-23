<template>
    <!-- <v-overlay
      :z-index="zIndex"
      :value="overlay"
    > -->

        <v-sheet 
            v-if="overlay"
            min-width="350px"
            max-width="700px"
        >
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <template v-for="n in steps">
                        <v-stepper-step
                            :key="`${n}-step`"
                            :complete="e1 > n"
                            :step="n"
                            editable
                        >
                            Step {{ n }}
                        </v-stepper-step>

                        <v-divider
                            v-if="n !== steps"
                            :key="n"
                        ></v-divider>
                    </template>
                </v-stepper-header>

                <v-stepper-items >
                    <v-stepper-content
                        :step="1"
                    >
                        <v-card
                            class="mb-12"
                        >
    
                            <v-card-title>
                                Pick a date of entry
                            </v-card-title>

                            <v-date-picker
                                v-model="date"
                                full-width
                                color=""
                            ></v-date-picker>

                        </v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(1)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="overlay = false, $emit('closed')"
                            class="ml-2"
                        >
                            <v-icon class="mr-1">
                                mdi-close
                            </v-icon>
                            Cancel
                        </v-btn>
                    </v-stepper-content>
                    
                    <v-stepper-content
                        :step="2"
                    >
                        <v-card
                            class="mb-12 "
                        >
    
                            <v-card-title>
                                Pick start and end time
                            </v-card-title>

                             <v-dialog
                                ref="dialog"
                                v-model="modal2"
                                :return-value.sync="time"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="time"
                                    label="Picker in dialog"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="modal2"
                                    v-model="time"
                                    full-width
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="modal2 = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.dialog.save(time), modal2 = false"
                                >
                                    OK
                                </v-btn>
                                </v-time-picker>
                            </v-dialog>
                        
                        </v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(2)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="overlay = false, $emit('closed')"
                            class="ml-2"
                        >
                            <v-icon class="mr-1">
                                mdi-close
                            </v-icon>
                            Cancel
                        </v-btn>
                    </v-stepper-content>
                    
                    <v-stepper-content
                        :step="3"
                    >
                        <v-card
                            class="mb-12 white black--text"
                        ></v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(3)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="overlay = false, $emit('closed')"
                            class="ml-2"
                        >
                            <v-icon class="mr-1">
                                mdi-close
                            </v-icon>
                            Cancel
                        </v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-sheet>

    <!-- </v-overlay> -->
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        steps: 3,
        zIndex: 2,
        date: new Date().toISOString().substr(0, 10),
        done: [false, false, false],
        mouseMonth: null,
        time: null,
        modal2: false,
      }
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },

    props: {
      overlay: {
        default: false
      }
    }
  }
</script>