<template>
    <v-overlay
      :z-index="zIndex"
      :value="overlay"
    >
        <v-sheet min-width="50vw">

            <div>
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

                <v-stepper-items>
                    <v-stepper-content
                    v-for="n in steps"
                    :key="`${n}-content`"
                    :step="n"
                    >
                    <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="200px"
                    ></v-card>

                    <v-btn
                        color="primary"
                        @click="nextStep(n)"
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
            </div>
            <!-- <v-btn
                class="white--text"
                color="teal"
            >
            </v-btn> -->
        </v-sheet>

    </v-overlay>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        steps: 3,
        zIndex: 2,
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