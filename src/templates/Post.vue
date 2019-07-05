<template>
  <Layout>
    <div class="blog">
      <div class="post__cart post__cart--view">
        <Header :post="$page.post"></Header>
        <div class="post__content post__content--blog" v-html="$page.post.content" />
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
  methods: {
    showprops: function() {
      console.log(this.$page.post.title);
    }
  },
  components: {
    Header
  }
};
</script>