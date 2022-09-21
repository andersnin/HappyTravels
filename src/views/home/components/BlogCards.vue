<template>
  <v-row class="max-width">
    <v-col cols="12" md="6" v-for="(post, index) in posts" :key="index" class="d-flex mt-8 pa-0"
           :class="$vuetify.display.mdAndUp ? (index + 1) % 2 ? 'pr-4' : 'pl-4' : ''">
      <v-card tile class="rounded-0 d-flex flex-column">
        <router-link :to="{ path: `post/${post.slug}` }" style="text-decoration: none;">
          <v-img
              cover
              :aspect-ratio="16/9"
              class="post-img"
              :src="post.feature_image">
            <v-card tile flat color="transparent" class="d-flex fill-height justify-start align-end rounded-0">
              <v-card-subtitle v-for="tag in post.tags" class="post-category text-uppercase font-weight-bold">
                {{ tag.name }}
              </v-card-subtitle>
            </v-card>
          </v-img>
        </router-link>
        <v-card-title class="text-wrap">{{ post.title }}</v-card-title>
        <v-card-text class="post-text">
          {{ excerpt(post.excerpt, 140) }}
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
              class="btn"
              variant="outlined"
              large
              @click="this.$router.push({ path: `post/${post.slug}` })"
          >
            Read More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {getPosts} from "../../../api/posts.js";

export default {
  name: "BlogCards",
  data() {
    return {
      posts: null
    }
  },
  created() {
    this.asyncData()
  },
  methods: {
    imgsum(num) {
      return num + 1080
    },
    async asyncData() {
      this.posts = await getPosts()
      console.log(this.posts)
    },
    excerpt(str, max) {
      if (str.length > max) {
        return str.substring(0, max) + "...";
      } else return str
    }
  }
}
</script>

<style scoped lang="scss">
.max-width {
  max-width: $max-width;
  margin: 0 auto;
}

.post-img {
  .post-category {
    background-color: $primary;
    color: white;
    opacity: 100%;
    padding: 8px 16px;
  }
}

.post-text {
  line-height: 2;
}

.btn {
  border-color: $primary;
  color: $primary;
}
</style>