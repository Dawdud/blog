<template>
  <Layout>
    <PostCard />
    <Pager class="pagination" :info="$page.posts.pageInfo" />
  </Layout>
</template>
<page-query>
query Posts ($page: Int){
  posts: allPost (perPage: 5, page: $page) @paginate {
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
        date (format: "D MMMM, YYYY", locale: "pl")
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
export default {
  components: {
    Pager,
    PostCard
  }
};
</script>


