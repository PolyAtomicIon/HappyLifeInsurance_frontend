<template>
  <v-container class="mb-4">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <v-sheet rounded="lg" elevation="2">

          <v-btn @click="checkLoggedIn">
            check
          </v-btn>

          <!-- <v-list color="transparent">
            <v-list-item v-for="(value, key) in profileData" :key="key">
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ key }}:</b> {{ printData(Profile[value]) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->

            <!-- <v-divider class="my-2"></v-divider> -->

            <!-- <v-list-item >
              <v-list-item-content>
                  <v-btn  @click="$router.push('/profile/permissions')" depressed class="secondary">User permissions</v-btn>
              </v-list-item-content>
            </v-list-item> -->

          <!-- </v-list> -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="12" md="9">
        <router-view class="child-view"></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "App",
  data: () => ({
    profileData: {
      'Name': 'name',
      'Email': 'email',
      'Job position': 'job_position'
    },
    Profile: null,
  }),

  mounted() {
  },

  computed: {
    ...mapGetters(['server_url']),
  },

  components: {
    // nav_bar,
  },
  created() {
    axios
      .get(this.server_url + "profile",
      )
      .then(response => {
        console.log(response.data);
        this.setProfile(response.data);
        this.Profile = response.data;
      })
      .catch(error => {
          console.log("ERRRR:: ", error.message);
      });
  },
  methods: {

    ...mapMutations(['setProfile']),

    checkLoggedIn(){

    axios
      .get(this.server_url + "check_logged_in",
      )
      .then(response => {
        console.log(response.data);
      })
    },

    printData(obj){
      if( typeof obj !== 'object' )
        return obj

      return obj.first + ' ' + obj.last;
    },

    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>