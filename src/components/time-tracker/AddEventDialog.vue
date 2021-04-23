<template>
    <!-- <v-overlay
      :z-index="zIndex"
      :value="overlay"
    > -->

        <v-sheet 
            v-if="overlay"
            min-width="350px"
            max-width="800px"
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
                            {{ n }}
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
                            width="300px"
                            class="mb-12 white black--text"
                            elevation="0"
                        >
                            <v-card-title>
                                Pick label
                            </v-card-title>

                            <v-select
                                v-model="type"
                                :items="types"
                                menu-props="auto"
                                label="Select"
                                hide-details
                                :color="typeColor"
                                prepend-icon="mdi-checkbox-blank-circle"
                                single-line
                            ></v-select>
                        </v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(1)"
                        >
                            Save
                        </v-btn>

                        <v-btn 
                            text 
                            @click="e1 = 1, close()"
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
                            class="mb-2"
                            elevation="0"
                            width="300px"
                        >
    
                            <v-card-title>
                                Pick a date of entry
                            </v-card-title>
                        
                            <v-date-picker
                                v-model="date"
                                color=""
                            ></v-date-picker>

                        </v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(2)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="close()"
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
                            width="300px"
                            class="mb-4 "
                            elevation="0"
                        >
    
                            <v-card-title>
                                Pick start and end time
                            </v-card-title>

                             <v-dialog
                                ref="dialog"
                                v-model="modal"
                                :return-value.sync="time"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="time"
                                    label="Start Time"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="modal"
                                    v-model="time"
                                    full-width
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="modal = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.dialog.save(time), modal = false"
                                >
                                    OK
                                </v-btn>
                                </v-time-picker>
                            </v-dialog>
                        
                             <v-dialog
                                ref="dialog1"
                                v-model="modal2"
                                :return-value.sync="time2"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="time2"
                                    label="End Time"
                                    prepend-icon="mdi-clock-time-four-outline"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="modal2"
                                    v-model="time2"
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
                                    @click="$refs.dialog1.save(time2), modal2 = false"
                                >
                                    OK
                                </v-btn>
                                </v-time-picker>
                            </v-dialog>

                        </v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(3)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="close()"
                            class="ml-2"
                        >
                            <v-icon class="mr-1">
                                mdi-close
                            </v-icon>
                            Cancel
                        </v-btn>
                    </v-stepper-content>
                    
                    <v-stepper-content
                        :step="4"
                    >
                        <v-card
                            width="300px"
                            class="white black--text"
                            elevation="0"
                        >
    
                            <v-card-title>
                                Write reason or description
                            </v-card-title>

                            <v-textarea
                                v-model="description"
                                outlined
                                clearable
                                clear-icon="mdi-close-circle"
                                name="input-7-4"
                                label="Reason or Description"
                            ></v-textarea>
                        </v-card>

                        <v-btn
                            color="primary"
                            @click="submit()"
                        >
                            Save
                        </v-btn>

                        <v-btn 
                            text 
                            @click="e1 = 1, close()"
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
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        e1: 1,
        steps: 4,
        zIndex: 2,
        mouseMonth: null,
        modal: null,
        modal2: false,
        types: [
          'Work hour', 'Not Work hour',
        ],
        colors: ['green', 'red'],
      }
    },

    props: {
      overlay: {
        default: false
      },
      isAdding: {
        default: false
      },
      time: {
        default: null
      },
      time2: {
        default: null
      },
      date: {
        default: new Date().toISOString().substr(0, 10)
      },
      description: {
        default: ''
      },
      type: {
        default: 'Work hour'
      },
      id: {
        default: null
      }  
    },

    computed: {
        ...mapGetters(['events']),
        typeColor(){
            if( this.type == this.types[0] )
                return 'green'
            return "red"
        }
    },

    methods: {
        ...mapMutations(['addNewEvent', 'updateEvent']),

        nextStep (n) {
            if (n === this.steps) {
            this.e1 = 1
            } else {
            this.e1 = n + 1
            }
        },

        submit(){

            console.log(this.date)
            console.log(this.time)

            let start = new Date(`${this.date}T${this.time}:00`)
            let end = new Date(`${this.date}T${this.time2}:00`)

            // console.log(start)
            // console.log(end)

            let event = {
                timed: true,
                name: this.type,
                start: start,
                end: end,
                color: this.typeColor,
                description: this.description,
                id: this.events.length + 1,
            }
            console.log(event)
            if( this.isAdding ){
                this.addNewEvent(event)
            }
            else{
                event.id = this.id;
                this.updateEvent(event)
            }

            this.close();
        },
        close(){
            this.overlay = false;
            this.$emit('closed');
            this.reset();
        },
        reset(){
            this.time = null;
            this.time2 = null;
            this.type = '';
            this.date = new Date().toISOString().substr(0, 10);
            this.description = '';
        }
    },
  }
</script>

<style scoped>

  .event-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }


</style>