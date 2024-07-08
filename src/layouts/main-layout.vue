<template>
  <header>
    <div class="header-wrapper main-container">
      <div class="font-700">
        LOGO
      </div>
      <div class="ml-auto">
        <AButton type="primary" @click="$router.push({ name: headerBtnContent.routeName })">
          {{ headerBtnContent.title }}
        </AButton>
      </div>
    </div>
  </header>

  <main>
    <RouterView #="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </main>

<!--  <footer> -->
<!--    <div class="footer-wrapper container"> -->
<!--      Footer -->
<!--      <div>Logo</div> -->
<!--      <div>sds</div> -->
<!--    </div> -->
<!--  </footer> -->
</template>

<script setup lang="ts">
const route = useRoute();
const headerBtnContent = computed(() => {
  let routeName = 'Payment';
  let title = 'Đăng ký khoá học ngay';
  switch (route.name) {
    case 'Payment':
      routeName = 'Details';
      title = 'Thông Tin chi tiết về khoá học này';
      break;
    case 'Details':
      routeName = 'Payment';
      title = 'Đăng ký khoá học';
      break;
  }

  return {
    routeName, title,
  };
});
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
