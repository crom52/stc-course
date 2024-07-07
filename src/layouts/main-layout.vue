<template>
  <header>This is header</header>
  <main class="bg-warmGray">
    <RouterView #="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </main>
  <footer>This is footer</footer>
</template>

<script lang="ts" setup>
</script>
