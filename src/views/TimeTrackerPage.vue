
<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <v-sheet rounded="lg" class="calendar-control-buttons">
          <v-list color="transparent">
            <v-list-item v-for="(key, value) in ProfileData" :key="key">
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ key }}:</b> {{ Profile[value] }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-text class="error--text">
                    Working
                  </v-text>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet height="80vh" rounded="lg" class="mb-10">
          <!-- <router-view class="child-view"></router-view> -->

          <div class="calendar-container">
            <calendar-app :types="types" />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// import InterestingCard from '../components/InterestingCard.vue'
import CalendarApp from "../components/CalendarApp.vue";
import { Units } from "dayspan";
import { mapGetters } from "vuex";

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

    ProfileData: {
      title: "Username",
      city: "City",
      phone: "Phone",
      email: "Email",
      numberOfCars: "Cars in wishlist #",
    },
  }),

  computed: {
    ...mapGetters(["Profile"]),
  },
  components: {
    CalendarApp,
    // InterestingCard
  },
};
</script>

<style scoped>
.calendar-container {
  /* height: calc(83% + 56px); */
  padding: 5px 0px;
  height: 88%;
  margin: auto;
  /* width: 50vw; */
}
.calendar-control-buttons{
  /* width: 100%; */
}
</style>