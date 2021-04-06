<template>
  <v-app id="dayspan" v-cloak> 
    <ds-calendar
      :calendar="calendar"
    >
      
    </ds-calendar>
  </v-app>  
</template>

<script>
import { Calendar } from 'dayspan';

export default {
  name: 'app',
  data: () => ({
    calendar: Calendar.days(),
    // types: [
    //   {id: 'D', label: 'day', shortcut: 'D', type: Units.DAY,   size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
    //   {id: 'W', label: 'week', shortcut: 'W', type: Units.WEEK,  size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
    // ]
    // day: 
  }),
  mounted(){
  }
}
</script>

<style>
  body, html, #app, #dayspan {
    font-family: Roboto, sans-serif;
    width: 100%;
    height: 100%;
  }

  .ds-calendar{
    min-height: 20% !important;
  }

  .v-application--wrap {
    min-height: 50vh;
  }
</style>