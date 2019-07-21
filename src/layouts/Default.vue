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
        <g-link class="nav__link" to="/">HOME</g-link>
        <g-link class="nav__link" to="/about">ABOUT</g-link>
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
  overflow-x: hidden;
  line-height: 1.5;
}

.nav__link {
  margin-left: 20px;
}
</style>
