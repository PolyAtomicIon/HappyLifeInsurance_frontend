<template>
  <v-app id="app" >
      
    <navigation-bar />

    <v-main class="grey lighten-4 ">

      <v-container 
        class=" pb-1"
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
            disabled: true,
            href: '/time-tracker'
          },
          {
            text: '',
            disabled: true,
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
            disabled: true,
            href: link
          });
        });

        // items.slice(-1)[0].disabled = true;

        return items
      }
    },

    components: {
      NavigationBar,
      FooterSection,
    }
  }
</script>

<style >
  .primary-color {
    color: #fff !important;
    background: #4e80b9 !important;
  }

  .primary-color-text {
    color: #4e80b9 !important;
  }

  .secondary-color {
    background: #769fcd !important;
  }

  .secondary-color-text {
    color: #769fcd !important;
  }

</style>