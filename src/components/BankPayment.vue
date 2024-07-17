<template>
  <div class="text-16">
    <h3 class="card-title">
      Thông tin thanh toán
    </h3>
    <div class="card-warp">
      <div>
        <div class="flex-bc flex-wrap font-600">
          <p class="text-gray">
            Tổng học phí:
          </p>
          <p class="text-18 text-green">
            {{ formatVND(BASE_PRICE) }}
          </p>
        </div>
      </div>
    </div>

    <h3 class="card-title mt-32">
      Thông tin chuyển khoản
    </h3>
    <div class="card-warp">
      <h6 class="bank-highlight">
        Chuyển khoản ngân hàng Việt Nam
      </h6>

      <!-- info -->
      <div class="grid mt-16 gap-8 font-500">
        <template v-for="item in bankInfo" :key="item.key">
          <template v-if="item.key !== 'payment-content'">
            <div class="flex-bc flex-wrap">
              <p class="min-w-300 text-gray">
                {{ item.title }}
              </p>
              <CopyableText
                :copyContent="item.copyContent || ''"
                showIcon
                class="cursor-pointer whitespace-nowrap"
              >
                {{ item.displayContent }}
              </CopyableText>
            </div>
          </template>

          <template v-else>
            <div class="flex flex-wrap justify-between">
              <p class="min-w-300 text-gray">
                {{ item.title }}
              </p>
              <ul class="whitespace-nowrap text-right">
                <li>STCK03 - <span class="text-yel1 font-400 font-italic">SĐT của bạn</span></li>
                <li class="text-12 text-gray">
                  Ví dụ: STCK03 - 0901020304
                </li>
              </ul>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatVND } from '@/utils/common.util';

const BASE_PRICE = 25000000;

const bankInfo = [
  {
    key: 'bank',
    title: 'Ngân hàng',
    displayContent: 'Vietcombank',
    copyContent: 'Vietcombank',
  },
  {
    key: 'bank-id',
    title: 'Số tài khoản',
    displayContent: '02 310 0062 6961',
    copyContent: '0231000626961',
  },
  {
    key: 'bank-account-name',
    title: 'Tên tài khoản',
    displayContent: 'NGUYEN MINH PHUC',
    copyContent: 'NGUYEN MINH PHUC',
  },
  {
    key: 'bank-branch',
    title: 'Chi nhánh',
    displayContent: 'Đắk Lắk',
    copyContent: 'Dak Lak',
  },
  {
    key: 'payment-content',
    title: 'Nội dung chuyển khoản',
  },
];
</script>

<style scoped lang="less">
.bank-highlight {
  @apply relative ml-8;
  @apply font-600;
  &::after {
    @apply absolute left--8 top-4;
    @apply  h-1/2 w-3 rounded-1/2 bg-red1;
    content: '';
  }
}
.card-title {
  @apply font-700 text-18 mb-8;
}

.card-warp {
  @apply p-16 rounded-18 b b-abd bg-white;
}
</style>
