<template>
  <div class="main-page relative">
    <div class="banner-warp sticky top-0 h-72">
      <div class="h-full flex items-center justify-center text-center">
        <ul class="px-12 text-16 md:text-18">
          <li class="text-110% text-gr1">
            Giảm giá lên tới 25%
          </li>
          <li class="text-80%">
            <span>Thông qua đăng ký tài khoản dưới ref của STC </span> <span class="inline-block">và mời nhóm bạn cùng tham gia khóa học</span>
          </li>
        </ul>

        <AButton
          class="hidden h-40 min-w-150 b bg-gr1 text-17 font-600 md:block !b-white"
          hover="!text-black bg-white"
          @click="$router.push({ name: 'Payment' })"
        >
          Đăng ký ngay
        </AButton>
      </div>
    </div>
    <div class="grid mx-auto max-w-1200 px-16 text-center">
      <!-- Slogan -->
      <h3
        class="mt-7% text-30 font-800"
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
            <div class="grid h-full md:grid-cols-2">
              <div class="hidden h-full overflow-hidden rounded-10 bg-black md:block">
                <img
                  :src="getImg('mrDong1.jpg')"
                  alt="Dong Pham"
                  class="mx-auto h-full"
                >
              </div>
              <div>
                <h3 class="mt-10% tgar2 text-30">
                  Xây dựng nền tảng
                </h3>
                <ul class="mt-16 text-20 font-mono">
                  <li>Tạo dựng nền tảng </li>
                  <li class="capitalize">
                    lý thuyết, kiến thức
                  </li>
                  <li>Vững vàng</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="carousel-warp"
            class="h-full"
          >
            <div class="grid h-full md:grid-cols-2">
              <div class="hidden h-full overflow-hidden rounded-10 bg-black md:block">
                <img
                  :src="getImg('mrDong2.jpg')"
                  alt="Dong Pham"
                  class="mx-auto h-full"
                >
              </div>
              <div>
                <h3 class="mt-10% tgar2 text-30">
                  Phát triển chiến lược
                </h3>
                <ul class="mt-16 text-20 font-mono">
                  <li>Vận dụng tài nguyên</li>
                  <li>Phát triển chiến lược</li>
                  <li class="capitalize">
                    chặt chẽ, linh hoạt
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="carousel-warp"
            class="h-full"
          >
            <div class="grid h-full md:grid-cols-2">
              <div class="hidden h-full overflow-hidden rounded-10 bg-black md:block">
                <img
                  :src="getImg('mrDong3.jpg')"
                  alt="Dong Pham"
                  class="mx-auto h-full"
                >
              </div>
              <div>
                <h3 class="mt-10% tgar2 text-30">
                  Tối ưu tiềm năng
                </h3>
                <ul class="mt-16 text-20 font-mono">
                  <li>Nhận biết cơ hội</li>
                  <li>Tối đa hóa lợi nhuận</li>
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
];
</script>

<style scoped lang="less">
.banner-warp {
  background-image: url('../assets//images/offer-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
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
