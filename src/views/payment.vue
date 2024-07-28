<template>
  <div class="main-page details-page font-page mx-auto max-w-1000 px-16">
    <div class="h-40 rounded-bl-10 rounded-br-10 bg-yel1/50 px-16 text-18 text-red1 font-700 leading-40">
      Chọn một trong hai hình thức bên dưới
    </div>
    <AConfigProvider
      :theme="seedTokenGlobalConfig"
    >
      <div class="tag-container mt-16">
        <ATabs v-model:activeKey="activeKey">

          <!-- default: Tab1 -->
          <ATabPane key="crypto">
            <template #tab>
              <span class="tag-title">Donate bằng Crypto</span>
            </template>

            <template #default>
              <CryptoPayment />
            </template>
          </ATabPane>

          <!-- Tab 2 -->
          <ATabPane key="bank">
            <template #tab>
              <span class="tag-title">Chuyển khoản ngân hàng</span>
            </template>

            <template #default>
              <BankPayment />
            </template>
          </ATabPane>
        </ATabs>
      </div>
    </AConfigProvider>
  </div>
</template>

<script setup lang=ts>
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

const seedTokenGlobalConfig: ThemeConfig = {
  token: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    borderRadius: 10,
  },
};
const activeKey = ref('crypto');
</script>

<style scoped lang="less">
.tag-title{
  @apply text-20 font-600;
}
</style>
