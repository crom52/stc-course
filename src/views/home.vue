<template>
  <div class="main-page">
    <div class="banner-warp absolute left-0 right-0 top-0 h-72">
      <div class="h-full flex items-center justify-center text-center">
        <ul class="text-18">
          <li>
            Discount lên tới 25% cho mỗi người
          </li>
          <li>Discount lên tới 25% cho mỗi người</li>
        </ul>
      </div>
    </div>
    <div class="grid mx-auto max-w-1200 px-16 text-center">
      <!-- Slogan -->
      <h3
        class="mt-10% text-30 font-800"
        md="text-35"
        lg="text-50"
      >
        Đừng FOMO.
        <br>
        Đầu tư hiệu quả bằng kiến thức.
      </h3>

      <p
        class="mt-16 text-18 text-cgray font-500"
        md="text-25"
        lg="text-30"
      >
        Chọn dự án chất lượng đừng chọn số lượng.
      </p>

      <!-- Register Button -->
      <div
        class="grid grid-cols-1 mt-50 items-center justify-center gap-16"
        sm="flex"
      >
        <AButton
          type="primary"
          class="btn-course bggar"
          @click="$router.push({ name: 'Details' })"
        >
          Thông tin khoá học
        </AButton>

        <AButton
          class="btn-course"
          @click="$router.push({ name: 'Payment' })"
        >
          Ghi danh
        </AButton>
      </div>

      <!--  Sponsor -->
      <div class="mt-32 rounded-10 md:mt-65">
        <p class="text-15 text-highlight font-400 font-mono uppercase">
          Được tài trợ bởi
        </p>

        <ul class="mt-32 flex flex-wrap justify-center gap-25">
          <li
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            class="proposal-highlight"
          >
            <img
              :src="getImg(sponsor.imgName)"
              loading="lazy"
              decoding="async"
              :alt="sponsor.name"
              class="w-50 md:w-70"
            >
          </li>
        </ul>
      </div>

      <!-- Carousel -->
      <div class="relative mt-42 overflow-hidden rounded-10 md:mt-75">
        <ACarousel :autoplay="true">
          <div
            id="carousel-warp"
            class="h-full"
          >
            <div class="grid grid-cols-2 h-full">
              <div class="h-full overflow-hidden rounded-10 bg-black">
                <img
                  :src="getImg('mrDong1.jpg')"
                  alt="Dong Pham"
                  class="mx-auto h-full"
                >
              </div>
              <div>
                <h3 class="mt-10% tgar2 text-30">
                  Keyword 1
                </h3>
                <ul class="mt-16 text-20 font-mono">
                  <li>marketing content1</li>
                  <li>marketing content2</li>
                  <li>marketing content3</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="carousel-warp"
            class="h-full"
          >
            <div class="grid grid-cols-2 h-full">
              <div class="h-full overflow-hidden rounded-10 bg-black">
                <img
                  :src="getImg('mrDong2.jpg')"
                  alt="Dong Pham"
                  class="mx-auto h-full"
                >
              </div>
              <div>
                <h3 class="mt-10% tgar2 text-30">
                  Keyword 2
                </h3>
                <ul class="mt-16 text-20 font-mono">
                  <li>marketing content1</li>
                  <li>marketing content2</li>
                  <li>marketing content3</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="carousel-warp"
            class="h-full"
          >
            <div class="grid grid-cols-2 h-full">
              <div class="h-full overflow-hidden rounded-10 bg-black">
                <img
                  :src="getImg('mrDong3.jpg')"
                  alt="Dong Pham"
                  class="mx-auto h-full"
                >
              </div>
              <div>
                <h3 class="mt-10% tgar2 text-30">
                  Keyword 3
                </h3>
                <ul class="mt-16 text-20 font-mono">
                  <li>marketing content1</li>
                  <li>marketing content2</li>
                  <li>marketing content3</li>
                </ul>
              </div>
            </div>
          </div>
        </ACarousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getImg } from '@/utils/common.util';

const sponsors = [
  {
    name: 'bybit',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'binance',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit2',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit3',
    imgName: 'bybit-final2.png',
  },

];
</script>

<style scoped lang="less">
.main-page {
  @apply mb-16;
}

.banner-warp {

}

.proposal-highlight {
  position: relative;
  &::after {
    content: "";
    z-index: -1;
    bottom: -7px;
    opacity: .8;
    left: -2px;
    @apply absolute rounded-3/2 w-full h-1/2 shadow-lg shadow-gray;
  }
}

.btn-course {
  @apply h-50 text-20 font-600 min-w-200;
}

:deep(.slick-slide) {
  @apply h-350 overflow-hidden text-white p-26 ;
  @apply bg-cover;
  background-image: url("../assets/images/bg-card3.jpg");
  div:has(#carousel-warp) {
    @apply h-full;
  }
}
</style>
