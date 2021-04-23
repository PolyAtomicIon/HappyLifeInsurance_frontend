<template>
  <v-footer
    color="secondary-color"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="py-1 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>@HappyLife Insurance</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style scoped>
</style>