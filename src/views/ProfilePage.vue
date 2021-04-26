<template>
  <v-container class="mb-4">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <v-sheet rounded="lg" elevation="2">
          <v-list color="transparent">
            <v-list-item v-for="(value, key) in profileData" :key="key">
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ key }}:</b> {{ printData(Profile[value]) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-divider class="my-2"></v-divider> -->

            <!-- <v-list-item >
              <v-list-item-content>
                  <v-btn  @click="$router.push('/profile/permissions')" depressed class="secondary">User permissions</v-btn>
              </v-list-item-content>
            </v-list-item> -->

          </v-list>
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
import {mapMutations} from 'vuex'

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
    this.fetchProfile();
  },

  computed: {
  },

  components: {
    // nav_bar,
  },
  methods: {
    ...mapMutations(['setProfile']),

    fetchProfile(){
      axios.get("https://next.json-generator.com/api/json/get/411DaOJLc")
          .then(
              response => {
                  console.log(response.data);
                  this.Profile = response.data;
                  this.setProfile(response.data);
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