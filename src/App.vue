<template>
  <v-app id="app" >
      
    <navigation-bar />
    
    <v-main class="grey lighten-4 ">
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