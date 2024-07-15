<template>
  <AConfigProvider
    :locale="enUs"
    :theme="seedTokenGlobalConfig"
  >
    <RouterView #="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </AConfigProvider>
</template>

<script setup lang="ts">
import enUs from 'ant-design-vue/es/locale/en_US';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

const seedTokenGlobalConfig: ThemeConfig = {
  token: {
    colorPrimary: '#eebe05',
    fontFamily: 'Signika, sans-serif',
    borderRadius: 15,
  },
};
</script>
