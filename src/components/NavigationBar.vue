<template>

  <div ref="navBar">
  
    <v-app-bar
      color="deep-purple"
      app
      dark
      flat
    >
      <v-app-bar-nav-icon @click="drawer = true, scrollTo()" class="hidden-md-and-up" ></v-app-bar-nav-icon>

      <v-toolbar-title>
          {{title}}
      </v-toolbar-title>

      <v-container class="py-0 fill-height hidden-sm-and-down">

        <v-btn v-for="(value, itemName) in links" :key="itemName" text @click="goToPage(value.path)">
          {{ itemName }}
        </v-btn>

        <v-spacer></v-spacer>

      </v-container>      

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >

            <v-list-item v-for="(value, itemName) in links" :key="value.icon" text @click="goToPage(value.path)">  
              <v-list-item-icon>
                <v-icon>{{ value.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-title> {{itemName}} </v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

  </div>

</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      title: 'Happy Life ',
      links: {
        'Home' : {
          icon: 'mdi-home',
          path: '',
        },
        'Profile' : {
          icon: 'mdi-account',
          path: 'profile',
        },
        'Time Tracker' : {
          icon: 'mdi-clock',
          path: 'time-tracker',
        },
        'Flex-status' : {
          icon: 'mdi-timeline',
          path: 'profile/flex-status',
        }
      },
      drawer: false,
      group: null,
    }),
    
    computed: {
    },

    mounted() {},

    components: {},
    methods: {
      
      scrollTo() {
        var element = this.$refs['navBar'];
        var top = element.offsetTop;
        window.scrollTo(0, top);
      },
  
      goToPage: function (url) {
        this.$router.push('/'+url);
      },

      goBack: function () {
        this.$router.go(-1);
      },
    }
  }
</script>