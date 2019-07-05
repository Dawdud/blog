<template>
  <Layout>
    <div class="main__content">
      <div class="container">
        <PostCard />
        
      </div>
    </div>
    <Pager :info="$page.posts.pageInfo" />
  </Layout>
</template>
<page-query>
query Posts ($page: Int){
  posts: allPost (perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        date (format: "D MMMM, YYYY")
        description
        image
        path
        
}
    }
  }
}
</page-query>
<script>
import { Pager } from "gridsome";
import PostCard from "../layouts/blog/PostCard";
import Sidebar from "../layouts/Sidebar";
export default {
  components: {
    Pager,
    PostCard,
    Sidebar
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
