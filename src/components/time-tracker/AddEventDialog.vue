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
                            color="primary-color"
                            @click="nextStep(1)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="e1 = 1, closeWindow()"
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
                                v-model="date_local"
                                color="primary-color"
                            ></v-date-picker>

                        </v-card>

                        <v-btn
                            color="primary-color"
                            @click="nextStep(2)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="closeWindow()"
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
                                    format="24hr"
                                    min="04:00"
                                    colo="primary-color"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary-color"
                                    @click="modal = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary-color"
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
                                    :min="time"
                                    max="23:59"
                                    format="24hr"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary-color"
                                    @click="modal2 = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary-color"
                                    @click="$refs.dialog1.save(time2), modal2 = false"
                                >
                                    OK
                                </v-btn>
                                </v-time-picker>
                            </v-dialog>

                        </v-card>

                        <v-btn
                            color="primary-color"
                            @click="nextStep(3)"
                        >
                            Continue
                        </v-btn>

                        <v-btn 
                            text 
                            @click="closeWindow()"
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
                            color="primary-color"
                            @click="submit()"
                        >
                            Save
                        </v-btn>

                        <v-btn 
                            text 
                            @click="closeWindow()"
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
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data () {
      return {
        e1: 1,
        steps: 4,
        zIndex: 2,
        modal: null,
        modal2: false,
        types: [
          'Work hour', 'Not Work hour',
        ],
        colors: ['green', 'red'],
        date_local: null
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
        default() {            
            let date = new Date();

            let hh = date.getHours() < 10? "0" + date.getHours(): date.getHours();
            let mm = date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes();

            return hh + ':' + mm;
        }
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
    mounted() {
        console.log(this.date)
        this.date_local = this.date
    },
    methods: {
        ...mapMutations(['addNewEvent']),
        ...mapActions(['updateEvent']),

        nextStep (n) {
            if (n === this.steps) {
                this.e1 = 1
            } else {
                this.e1 = n + 1
            }
        },

        submit(){

            // console.log(this.date_local)
            // console.log(this.time)

            let start = new Date(`${this.date_local}T${this.time}:00`)
            let end = new Date(`${this.date_local}T${this.time2}:00`)

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

            this.closeWindow();
        },
        closeWindow(){
            this.reset();
            this.overlay = false;
            this.$emit('closed');
        },
        reset(){
            this.nextStep(4);
            this.time = this.currentTimeString();
            this.time2 = null;
            this.type = this.types[0];
            this.date_local = this.date;
            this.description = '';
        },
        currentTimeString(){
            let date = new Date();

            let hh = date.getHours() < 10? "0" + date.getHours(): date.getHours();
            let mm = date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes();

            return hh + ':' + mm;
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