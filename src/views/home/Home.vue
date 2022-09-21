<template>
  <v-container fluid class="pa-4">
    <HomeCarousel/>
    <BlogCards/>
  </v-container>
</template>

<script>
import HomeCarousel from "./components/HomeCarousel.vue";
import BlogCards from "./components/BlogCards.vue";

export default {
  name: "Home",
  components: {
    HomeCarousel,
    BlogCards
  }
}
</script>

<style scoped>

</style>