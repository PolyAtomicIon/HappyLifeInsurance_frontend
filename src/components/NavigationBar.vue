<template>

  <div ref="navBar">
  
    <v-app-bar
      color="deep-purple"
      app
      dark
      flat
      dense
    >
      <v-app-bar-nav-icon @click="drawer = true, scrollTo()" class="hidden-md-and-up" ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn depressed color="transparent" @click="$router.push('/')">
          <v-icon class="mr-1"> mdi-home </v-icon>  
          {{title}}
        </v-btn>
      </v-toolbar-title>

      <v-container class="py-0 fill-height hidden-sm-and-down">
        <v-spacer></v-spacer>

        <v-btn v-for="(value, itemName) in links" :key="itemName" text @click="goToPage(value.path)">
          
          <v-icon
            class="mr-1"
          >
            {{value.icon}}
          </v-icon>
          
          {{ itemName }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn text @click="goToPage(AuthLinks.Login.path)">
          
          <v-icon
            class="mr-1"
          >
            {{AuthLinks.Login.icon}}
          </v-icon>
          
          {{ AuthLinks.Login.title }}
        </v-btn>

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

            <v-list-item @click="goToPage(AuthLinks.Login.path)">  
              <v-list-item-icon>
                <v-icon>{{ AuthLinks.Login.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-title> {{AuthLinks.Login.title}} </v-list-item-title>
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
        // 'Home' : {
        //   icon: 'mdi-home',
        //   path: '',
        // },
        'Profile' : {
          icon: 'mdi-account',
          path: 'profile/permissions',
        },
        'Time Tracker' : {
          icon: 'mdi-clock',
          path: 'time-tracker',
        },
        'Flex-status' : {
          icon: 'mdi-timeline',
          path: 'flex-status',
        },
        'Shared with me' : {
          icon: 'mdi-share',
          path: 'shared-with',
        }
      },
      AuthLinks: {
        Login : {
          title: 'Login',
          icon: 'mdi-login',
          path: 'login',
        },
        Logout : {
          title: 'Logout',
          icon: 'mdi-logout',
          path: '/',
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