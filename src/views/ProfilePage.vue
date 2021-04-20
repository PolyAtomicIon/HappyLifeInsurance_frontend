<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="(value, key) in profileData" :key="key">
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ key }}:</b> {{ printData(Profile[value]) }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item >
              <v-list-item-content>
                  <v-btn @click="$router.push('/profile/flex-status')" depressed class="primary">Flex-status</v-btn>
              </v-list-item-content>
            </v-list-item>

            <v-list-item >
              <v-list-item-content>
                  <v-btn  @click="$router.push('/profile/permisssions')" depressed class="secondary">Editors list</v-btn>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet rounded="lg">
          <router-view class="child-view"></router-view>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

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
    var title = "title";
    console.log(this.Profile[title]);
  },

  computed: {
  },

  components: {
    // nav_bar,
  },
  methods: {

    fetchProfile(){
      axios.get("https://next.json-generator.com/api/json/get/411DaOJLc")
          .then(
              response => {
                  console.log(response.data);
                  this.Profile = response.data;
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