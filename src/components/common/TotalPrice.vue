<template>
  <div class="flex-bc flex-col-reverse flex-wrap font-600 md:flex-row cursor-default!">
    <div>
      <p class="hidden self-start text-gray md:block">
        Tổng học phí:
      </p>
      <div class="mt-16 text-left text-16">
        <span class="mr-16 "><i class="i-material-symbols-confirmation-number-rounded mr-4 text-red" /><span class="t-black">Tham gia cộng đồng STC để nhận ưu đãi đặc biệt</span></span>
        <span class="mr-16 break-line t-black">Giá chỉ còn 14.900.000VND/599$</span>
        <div
          md="inline-block mt-0"
          class="my-16 block cursor-pointer text-blue hover:text-blue-5 break-line text-left t-black"
          @click="openNewTab(STC_TELEGRAM_LINK)"
        >
          <i class="i-f7:hand-point-right mr-4" />Link tham gia<i class="i-ic:baseline-telegram mr-4 text-16" />
        </div>
      </div>
      <!-- crom chỉnh opacity từ 10-90 -->
<!--      <AButton-->
<!--        class="join-button"-->
<!--        :class="{ 'opacity-70': hasJoined }"-->
<!--        @click="hasJoined = true"-->
<!--      >-->
<!--        <i v-if="hasJoined" class="i-mdi-check-circle-outline mr-4" />-->
<!--        {{ hasJoined ? 'Đã tham gia' : 'Xác nhận đã tham gia' }}-->
<!--      </ApriceInfoButton>-->
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
    amount: props.basePrice,
    className: 'disabled-price',
  },
  active: {
    amount: props.discountedPrice,
    className: 'active-price mgb-55percent',
  },
}));
</script>

<style scoped>
.join-button {
  @apply mt-16 w-full;
  /* crom chỉnh màu background kiểu (bg-#b82a2f), chỉnh border (b-#b82a2f)
   */
  @apply b-green bg-green text-white hover:text-white!;
  @apply md:w-fit;
}
.active-price {
  @apply md:text-25 text-30;
  @apply text-green font-700;
}

.mgb-55percent {
  margin-bottom: 55%;
}

.disabled-price {
  @apply md:text-18 text-20;
  @apply decoration-text-gray-6 text-gray-5 font-600 line-through;
}
</style>
