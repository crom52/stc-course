<template>
  <div class="main-page font-page mx-auto max-w-1400 px-16">
    <div class="tag-container">
      <ATabs v-model:activeKey="activeKey">
        <!-- Tab1 -->
        <ATabPane key="bank">
          <template #tab>
            <span class="tag-title">Chuyển khoản ngân hàng</span>
          </template>

          <template #default>
            <BankPayment />
          </template>
        </ATabPane>

        <!-- Tab2 -->
        <ATabPane key="crypto">
          <template #tab>
            <span class="tag-title">Donate bằng Cryto</span>
          </template>

          <template #default>
            <CryptoPayment />
          </template>
        </ATabPane>
      </ATabs>
    </div>
  </div>
</template>

<script setup lang=ts>
const activeKey = ref('bank');
</script>

<style scoped lang="less">
.tag-title{
  @apply text-20 font-600;
}
</style>
