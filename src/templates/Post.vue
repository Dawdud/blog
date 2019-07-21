<template>
  <Layout>
    <div class="blog">
      <div class="post__cart">
        <Header :post="$page.post"></Header>
        <div class="post__content post__content--blog" v-html="$page.post.content" />
        <vue-disqus shortname="zapiskizfrontu" :identifier="$page.post.title"></vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
   
  }
}
</page-query>

<script>
import Header from "../layouts/blog/Header";
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {},
  components: {
    Header
  }
};
</script>