<template>
  <v-app id="app" >
      
    <navigation-bar />

    <v-main class="grey lighten-4 mt-2">

      <v-container 
        class="pt-2 pb-1"
      >

        <v-breadcrumbs
          :items="breadCrumbsItems"
          divider="/"
          large
        ></v-breadcrumbs>

      </v-container>

      <transition name="fade" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
    </v-main>

    <footer-section />

  </v-app>
</template>

<script>

  import NavigationBar from './components/NavigationBar.vue';
  import FooterSection from './components/FooterSection.vue';

  export default {
    name: 'App',
    data: () => ({
    }),

    computed: {
      breadCrumbsItems(){
        console.log("bread crumbs items");
        let path = this.$route.path.slice(1);
        // console.log(path);

        if( path === "" ){
          return [{
            text: 'Time-tracker',
            disabled: false,
            href: '/time-tracker'
          },
          {
            text: '',
            disabled: false,
            href: '/'
          }]
        }

        let pathsChunks = path.split('/')
        // console.log(pathsChunks);

        pathsChunks.push("");

        let items = [];
        let link = ''

        pathsChunks.forEach(chunk => {
          link = link + '/' + chunk;
          items.push({
            text: chunk.charAt(0).toUpperCase() + chunk.slice(1),
            disabled: false,
            href: link
          });
        });

        items.slice(-1)[0].disabled = true;

        return items
      }
    },

    components: {
      NavigationBar,
      FooterSection,
    }
  }
</script>

<style scoped>
  .stable {
    padding: 56px 0px 0px !important;
  }
</style>