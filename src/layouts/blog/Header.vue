<template>
  <div>
    <div class="post__thumbnail">
      <g-image :src="post.image" />
    </div>
    <header class="post__header">
      <g-link class="post__title" :to="post.path">
        <span class="underline">{{post.title}}</span>
      </g-link>
      <div class="post__meta">
        <span class="post__date">
          <i class="far fa-calendar-alt calendar"></i>
          <p class="published">{{post.date}}</p>
        </span>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  props: ["post"]
};
</script>