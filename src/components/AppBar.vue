<template>
  <v-app-bar app class="app-bar-bg pa-0" flat height="200">
    <v-row class="d-flex app-bar pa-0 align-center ">
      <v-col clasS="pa-0">
        <img class="logo" height="100" :src="logo" alt="logo" style="cursor: pointer"
             @click="this.$router.push({path: '/'})"/>
      </v-col>
      <v-spacer/>
      {{$vuetify.display.name}}
      <v-col cols="2" class="pa-0">
        <v-text-field
            class="text-field"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details="true"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import logo from '../assets/ht_logo.svg'

export default {
  name: "AppBar",
  data: () => ({
    logo,
  })
}
</script>

<style scoped lang="scss">
.logo {
  filter: invert(50%) sepia(52%) saturate(316%) hue-rotate(107deg) brightness(91%) contrast(88%);
}

.app-bar {
  max-width: $max-width;
  margin: 0 auto;
}

.app-bar-bg {
  background-color: white !important;
}

::v-deep(v-text-field--outlined) {
  color: red;
}

.v-text-field--outlined > fieldset {
  border-color: red;
}
</style>