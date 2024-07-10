<template>
  <main>
    <RouterView #="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
main {
  @apply relative h-screen overflow-x-hidden;
  &::before {
  @apply absolute z--1 top-0 left-0 w-full h-full opacity-30;
    content: "";
    background-image: url("../assets/images/app-background.svg");
    z-index: -1;
  }
}
</style>
