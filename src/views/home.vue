<template>
  <div class="main-page main-warp">
    <!-- folder1 -->
    <div
      class="relative col-span-4 row-span-2"
      lg="row-span-4"
    >
      <div class="folder bg-#faebd7">
        <div class="absolute top--70 h-70 w-full flex flex items-center justify-center md:justify-between">
          <img
            class="ml-8 h-55"
            :src="getImg('stc-logo.png')"
            alt="stc logo"
          >
          <AButton
            class="z-100 mr-30 mt-12 hidden h-50 w-200 bg-red1 text-18 text-white font-800 md:block"
            shape="round"
            @click="$router.push({ name: 'Payment' })"
          >
            Đăng ký ngay
          </AButton>
        </div>
        <div class="h-full flex p-32">
          <!-- Slogan -->
          <div
            class="z-10 min-h-450 flex-1 text-center text-40 font-900"
            md="text-left ml-50px md:text-5.5vw"
            lg="text-70"
          >
            <TransitionGroup
              name="fade"
              tag="ul"
              class="grid h-full items-center"
              mode="out-in"
            >
              <li
                v-show="!display"
                key="1"
              >
                <p class="text-red1">
                  Đừng FOMO
                </p>
                <p>
                  Đầu tư hiệu quả <span class="block">bằng kiến thức</span>
                </p>
              </li>

              <li
                v-show="display"
                key="2"
              >
                <p>Chọn dự án chất lượng</p>
                <p class="inline-block">
                  Đừng chọn số lượng
                </p>
              </li>
            </TransitionGroup>

            <div class="absolute bottom-30 left-16 right-16 z-120 grid items-stretch gap-8 lg:bottom-100 md:(left-80 flex)">
              <AButton
                class="h-50 text-18 md:w-200"
                @click="$router.push({ name: 'Details' })"
              >
                Thông tin khoá học
              </AButton>

              <AButton
                class="h-50 bg-red1 text-18 text-white md:w-200"
                @click="$router.push({ name: 'Payment' })"
              >
                Ghi danh
              </AButton>
            </div>
          </div>

          <!-- Image -->
          <div
            class="hidden"
            md="block flex-basis-1/5"
          >
            <canvas
              class="canvas-image"
              width="300"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- card video -->
    <div
      class="col-span-4 row-span-2 h-full min-h-250 rounded-20 shadow-xl"
      lg="col-span-2"
    >
      <div class="mx-auto h-inherit overflow-hidden rounded-20">
        <iframe
          class="h-inherit w-full"
          src="https://www.youtube.com/embed/mMUYSM9daF4"
        />
      </div>
    </div>

    <!-- card course name span 1 -->
    <div
      class="col-span-4 row-span-2 overflow-hidden rounded-20 bg-white shadow-xl"
      sm="col-span-2"
      lg="col-span-1"
    >
      <img :src="getImg('course-overview2.png')" alt="course details">
      <div class="grid items-stretch p-8">
        <div class="flex items-center justify-between">
          <h3 class="cursor-pointer text-30 font-700 hover:text-red1" @click="$router.push({ name: 'Details' })">
            Khóa 03
          </h3>
          <i class="i-material-symbols-arrow-forward-rounded cursor-pointer text-35 text-red1" @click="$router.push({ name: 'Details' })" />
        </div>
        <ul class="pl-16 text-16 font-400">
          <li>TP. Hà Nội</li>
          <li class="mt-4">
            TP. Hồ Chí Minh
          </li>
        </ul>

        <div class="mt-12 flex items-center gap-8">
          <AAvatar :size="35" :src="getImg('avatar-mr-dong.png')" />
          <span class="text-16 text-gray font-500">Đông Phạm</span>
        </div>
      </div>
    </div>

    <!-- card other name span 1 -->
    <div
      class="col-span-4 row-span-2 rounded-20 bg-white shadow-xl"
      sm="col-span-2"
      lg="col-span-1"
    >
      <div class="h-full flex flex-col p-16 text-center">
        <h3 class="mt-12 text-20 text-red1 font-700 capitalize">
          Được tài trợ bởi
        </h3>
        <div class="flex-cc flex-grow">
          <img
            class="w-200 lg:w-70% md:w-250"
            :src="getImg('bybit-icon-trans.png')"
            alt="bybit logo"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getImg } from '@/utils/common.util';

const display = ref<boolean>(false);

setInterval(() => {
  display.value = !display.value;
}, 2000);
</script>

<style scoped lang="less">
.common-rounded {
  @apply rounded-20;
}

.canvas-image {
  @apply absolute right-40 bottom--32;
  height: 100%;

  background-image: url("../assets/images/111-Photoroom.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.main-warp {
  @apply max-w-1400 mx-auto p-16 mt-65;
  @apply grid gap-16 grid-cols-4 md:(grid-rows-6);
  min-height: calc(100vh - 70rem);
}

.folder{
  @apply rounded-20 relative h-full;
  //filter: drop-shadow(0 0 0.75rem grey); // TODO: research it
  &::before {
    @apply md:content-[''];
    @apply absolute w-400 h-95 rounded-tl-20;
    background-color: #faebd7;
    content: none;
    top: -6.3rem;
    right: 0;
    clip-path: path('M 0 0 L 205 0 C 300 0, 235 81, 429 63 L 0 90 z');
    transform: scaleX(-1); /* Adjust the angle as */

  }
}
</style>
