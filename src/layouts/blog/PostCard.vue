<template>
  <div class="post">
    <article class="post__cart" v-for="post in $page.posts.edges">
      <Header :post="post.node"></Header>
      <Content :post="post"></Content>
    </article>
  </div>
</template>

<script>
import Header from "./Header";
import Content from "./Content";
export default {
  components: {
    Header,
    Content
  }
};
</script>
