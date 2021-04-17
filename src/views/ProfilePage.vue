<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="(key, value) in ProfileData" :key="key">
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ key }}:</b> {{ Profile[value] }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <router-view class="child-view"></router-view>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({
    ProfileData: {
      title: "Username",
      city: "City",
      phone: "Phone",
      email: "Email",
      numberOfCars: "Cars in wishlist #",
    },
  }),

  mounted() {
    this.fetchProfile();
    var title = "title";
    console.log(this.Profile[title]);
  },

  computed: {
    ...mapGetters(["Profile"]),
  },

  components: {
    // nav_bar,
  },
  methods: {
    ...mapActions(["fetchProfile"]),

    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>