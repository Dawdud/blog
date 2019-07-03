<template>
  <div class="post__content">
    <div class="post__description">
      <p>{{post.node.description}}</p>
    </div>
    <div class="post__read">
      <g-link class="btn--read" :to="post.node.path">Czytaj dalej</g-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"]
};
</script>