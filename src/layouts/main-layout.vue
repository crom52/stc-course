<template>
  <main>
    <Transition name="fade" mode="out-in">
      <RouterView #="{ Component }">
        <Component :is="Component" />
      </RouterView>
    </Transition>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
@headerHeight: 6.4rem;
@footerHeight: 6.4rem;

.main-container {
  @apply h-full;
}

header {
 height: @headerHeight;
  @apply b-b border-gray-200;
  .header-wrapper {
    @apply px-16 h-full w-full;
    @apply flex items-center;
  }
}

main {
  //min-height: 100vh;
  padding: 0 1.6rem;
  margin-bottom: 3.2rem;
}

footer {
  height: @footerHeight;
  .footer-wrapper {
    @apply px-16 h-full;
    @apply flex items-center;
  }
}
</style>
