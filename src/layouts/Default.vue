<template>
  <div class="layout">
    <header class="header">
      <div class="logo">
        <strong>
          <g-link to="/">
            <h1 class="logo__title">{{ $static.metaData.siteName }}</h1>
          </g-link>
        </strong>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot />
    <footer class="footer">
      <p>&#9400; COPYRIGHT ZAPISKI Z FRONTU</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.nav__link {
  margin-left: 20px;
}
</style>
