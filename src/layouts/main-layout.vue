<template>
  <header>
    <div class="header-wrapper container">
      header
      <div>Logo</div>
      <div>sds</div>
    </div>
  </header>

  <main>
    <RouterView #="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </main>

  <footer>
    <div class="footer-wrapper container">
      Footer
      <div>Logo</div>
      <div>sds</div>
    </div>
  </footer>
</template>

<style scoped lang="less">
@headerHeight: 6.4rem;
@footerHeight: 6.4rem;

.container {
  @apply h-full;
}

header {
 height: @headerHeight;
  @apply b-b border-gray-200;
  .header-wrapper {
    @apply px-16 h-full;
    @apply flex items-center;
  }
}

main {
  min-height: calc(100vh - @headerHeight - @footerHeight);
  padding: 0 1.6rem;
}

footer {
  height: @footerHeight;
  .footer-wrapper {
    @apply px-16 h-full;
    @apply flex items-center;
  }
}
</style>
