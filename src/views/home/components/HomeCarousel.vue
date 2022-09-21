<template>
  <v-carousel
      v-if="$vuetify.display.mdAndUp"
      :hide-delimiters="true"
      cycle
      class="carousel">
    <template v-slot:prev="{ props }">
      <v-icon
          class="arrow-icon"
          @click="props.onClick"
          color="white"
      >mdi-arrow-left-thick
      </v-icon>
    </template>
    <template v-slot:next="{ props }">
      <v-icon
          class="arrow-icon"
          @click="props.onClick"
          color="white"
      >mdi-arrow-right-thick
      </v-icon>
    </template>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
    >
      <v-card
          flat
          color="transparent"
          class="d-flex fill-height justify-start align-end">
        <v-card-title class="text-box text-h4">{{ item.title }}</v-card-title>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HoCarousel",
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          title: "When in Rome, do as the Romans!"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          title: "Life can be short, enjoy it!"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          title: "You should have seen the other guy!"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: "I went to this crazy planet!"
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.carousel {
  max-width: $max-width;
  margin: 0 auto;

  .arrow-icon {
    padding: 16px;
    background-color: $primary;
    border-radius: 50%;
  }

  .text-box {
    background-color: white;
    font-weight: 390;
    color: $primary;
    opacity: 100%;
    margin: 16px;
  }
}
</style>