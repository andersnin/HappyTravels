<template>
  <v-app>
    <AppBar/>
    <v-main>
      <v-row>
        <v-col cols="2" v-if="$vuetify.display.lgAndUp"></v-col>
        <v-col cols="12" lg="8">
          <router-view></router-view>
        </v-col>
        <v-col cols="2" v-if="$vuetify.display.lgAndUp">
          <div>
            <h1>Sidebar</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppBar from "./components/AppBar.vue";
import logo from './assets/ht_logo.svg'

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppBar
  },

  data: () => ({
    logo
  }),
}
</script>

<style lang="scss">

</style>
