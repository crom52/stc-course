<template>
  <div class="main-page">
    <!--    <canvas -->
    <!--      id="gradient-canvas" -->
    <!--      class="thump-image fixed right-[-2px] top-10% z-10 h-80vh md:w-1/3" -->
    <!--      width="350" -->
    <!--      height="800" -->
    <!--    /> -->
    <div class="grid mx-auto max-w-1200 px-16 text-center">
      <!-- Slogan -->
      <h3
        class="lg: mt-15% text-30 font-800"
        md="text-35"
        lg="text-50"
      >
        Đừng FOMO.
        <br>
        Đầu tư hiệu quả bằng kiến thức.
      </h3>

      <p
        class="text-cgray mt-16 text-18 font-500"
        md="text-25"
        lg="text-30"
      >
        Chọn dự án chất lượng đừng chọn số lượng.
      </p>

      <!-- Register Button -->
      <div
        class="grid grid-cols-1 mt-32 items-center justify-center gap-16"
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
      <div class="mt-42 rounded-10">
        <p class="text-highlight font-300 font-sans uppercase">
          Được tài trợ bởi
        </p>

        <ul class="mt-16 flex flex-wrap justify-center gap-20">
          <li
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            class="test-box"
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
      <div class="relative mt-42 overflow-hidden rounded-10">
        <ACarousel>
          <div class="flex">
            <div class="h-120">
              Hello this is contgent
            </div>
            <div>Hello this is image</div>
          </div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
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
  {
    name: 'bybit4',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit5',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit6',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit7',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit8',
    imgName: 'bybit-final2.png',
  },
  {
    name: 'bybit9',
    imgName: 'bybit-final2.png',
  },

];
</script>

<style scoped lang="less">
.test-box {
  position: relative;

  &::after {
    content: "";
    z-index: -1;
    bottom: -4px;
    opacity: .8;
    left: -2px;
    @apply absolute rounded-3/2 w-full h-1/2 shadow-lg shadow-gray;
  }
}

.btn-course {
  @apply h-50 text-20 font-600 min-w-200;
}

.thump-image {
  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .5;
}

:deep(.slick-slide) {
  height: 35rem;
  background: #222222;
  overflow: hidden;
  color: white;
  padding: 1.6rem;
}
</style>
