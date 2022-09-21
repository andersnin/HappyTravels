<template>
  <v-container fluid class="d-flex flex-column align-center">
    <article>
      <!--      <v-img cover style="height: 300px" class="feature-image" :src="post.feature_image" alt="" />-->
      <v-row class="mx-auto mb-2 pa-0 post-width">
        <p v-for="tag in post.tags">{{ tag.name }}, &nbsp </p>
        <p>{{ getDateTime(post.created_at) }}</p>
      </v-row>
      <h1>{{ post.title }}</h1>
      <span class="post-content" v-html="post.html"></span>
    </article>
  </v-container>
</template>

<script>
import {getSinglePost} from '../../api/posts.js';

export default {
  name: "SinglePostView",
  data() {
    return {
      post: "",
      date: ""
    }
  },
  created() {
    this.asyncData()
  },
  methods: {
    async asyncData() {
      this.post = await getSinglePost(this.$route.params.slug)
      console.log(this.post)
    },
    getDateTime(iso) {
      let date = new Date(iso);
      return (date.getDate() + '/' + (date.getMonth() + 1)+ '/' + date.getFullYear());
    }
  }
}
</script>

<style scoped lang="scss">
$post-width: 700px;

.post-width {
  max-width: $post-width;
}

h1 {
  max-width: $post-width;
  margin: 0 auto 1rem auto;
  font-family: 'Unna', serif;
  font-size: 3em;
  line-height: 1.2;
}

img {
  padding: 1em 0;
}

::v-deep(.post-content) {
  h2, h3 {
    max-width: $post-width;
    margin: 2rem auto 8px auto;
    font-family: 'Open Sans', sans-serif;
  }

  p {
    max-width: $post-width;
    margin: 0 auto 1em auto;
    line-height: 1.5;
    font-size: 1.2em;
    font-family: 'Open Sans', sans-serif;
  }

  //:first-child::first-letter {
  //  padding: 0 .3rem;
  //  font-family: 'Unna', serif;
  //  font-size: 4rem;
  //  float: left;
  //  line-height: 1;
  //}

  blockquote {
    margin: 1em 40px;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 1.5rem;
    font-family: 'Unna', serif;

  }
}

// REGULAR WIDTH

::v-deep(span) {
  .kg-width-wide {
    max-width: 70%;
  }

  .kg-width-full {
    max-width: 100%;
  }

  figure {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: $post-width;
    margin: 2rem auto;
    height: auto;

    img {
      max-width: 100%;
      height: auto;
    }

    figcaption {
      color: gray;
      max-width: $post-width;
      align-self: center;
      margin-top: .5px;
    }
  }
}
</style>