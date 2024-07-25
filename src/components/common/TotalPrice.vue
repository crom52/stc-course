<template>
  <div class="flex-bc flex-col-reverse flex-wrap font-600 md:flex-row cursor-default!">
    <div>
      <p class="hidden self-start text-gray md:block">
        Tổng học phí:
      </p>
      <div class="mt-16 text-center text-16">
        <span class="mr-16"><i class="i-material-symbols-confirmation-number-rounded mr-4 text-red" /><span>Tham gia cộng đồng STC để được giảm 200$</span></span>
        <div
          md="inline-block mt-0"
          class="my-16 block cursor-pointer text-blue hover:text-blue-5"
          @click="openNewTab(STC_TELEGRAM_LINK)"
        >
          <i class="i-f7:hand-point-right mr-4" />Link tham gia<i class="i-ic:baseline-telegram mr-4 text-16" />
        </div>
      </div>
      <AButton
        class="cbutton-green mt-16 w-full md:w-fit"
        @click="hasJoined = true"
      >
        Xác nhận đã tham gia
      </AButton>
    </div>

    <ul class="text-center md:text-right">
      <template v-for="(item, type) in priceInfo" :key="type">
        <li :class="item.className">
          {{ item.amount }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { openNewTab } from '@/utils/common.util';

const props = defineProps<{
  discountedPrice: string;
  basePrice: string;
}>();

const hasJoined = ref<boolean>(false);

const priceInfo = computed(() => ({
  disabled: {
    amount: hasJoined.value ? props.basePrice : props.discountedPrice,
    className: 'disabled-price',
  },
  active: {
    amount: hasJoined.value ? props.discountedPrice : props.basePrice,
    className: 'active-price',
  },
}));
</script>

<style scoped>
.active-price {
  @apply md:text-25 text-30;
  @apply text-green font-700;
}

.disabled-price {
  @apply md:text-18 text-20;
  @apply decoration-text-gray-6 text-gray-5 font-600 line-through;
}
</style>
