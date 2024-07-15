<template>
  <div class="main-page main-warp">
    <!-- folder1 -->
    <div
      class="relative col-span-4 row-span-2"
      lg="row-span-4"
    >
      <div class="folder bg-gray">
        <div class="absolute top--70 h-70 w-full flex flex items-center justify-center md:justify-between">
          <img
            class="ml-8 h-55"
            :src="getImg('stc-logo.png')"
            alt="stc logo"
          >
          <AButton
            class="z-100 mr-30 mt-12 hidden h-50 w-200 text-18 md:block"
            shape="round"
            @click="$router.push({ name: 'Payment' })"
          >
            Đăng ký ngay
          </AButton>
        </div>
        <div class="h-full flex p-16">
          <!-- Slogan -->
          <div
            class="z-10 flex-1 text-center text-40 font-900"
            md="text-left md:text-5.5vw"
            lg="text-70"
          >
            <TransitionGroup
              name="fade"
              tag="ul"
              class="relative grid h-full items-center"
              mode="out-in"
            >
              <li
                v-show="!display"
                key="1"
              >
                <p>Đừng FOMO</p>
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
            </transitiongroup>

            <div class="absolute left-30 z-120 flex gap-16 md:bottom-120">
              <AButton
                class="hidden h-50 w-200 text-18 md:block"
                shape="round"
                @click="$router.push({ name: 'Details' })"
              >
                Thông tin khoá học
              </AButton>

              <AButton
                class="hidden h-50 w-200 bg-red1 text-18 text-white md:block"
                shape="round"
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
      class="col-span-4 row-span-2 h-full rounded-25 shadow-xl"
      lg="col-span-2"
    >
      <div class="mx-auto h-inherit overflow-hidden rounded-25">
        <iframe
          class="h-inherit w-full"
          src="https://www.youtube.com/embed/mMUYSM9daF4"
        />
      </div>
    </div>

    <!-- card course name span 1 -->
    <div
      class="col-span-4 row-span-2 rounded-25 bg-white shadow-xl"
      sm="col-span-2"
      lg="col-span-1"
    >
      <div class="h-full p-32">
        <div class="flex items-center justify-between">
          <i class="i-mdi:arrow-right-drop-circle cursor-pointer text-60 text-red1" />
          <AAvatar :size="60">
            Avatar
          </AAvatar>
        </div>

        <ul class="mt-32 text-25">
          <li>
            Gv: <span class="font-600">Đông Phạm</span>
          </li>
          <li class="mt-8 text-30 font-700 uppercase">
            Khoá 03
          </li>
        </ul>
      </div>
    </div>

    <!-- card other name span 1 -->
    <div
      class="col-span-4 row-span-2 rounded-25 bg-white shadow-xl"
      sm="col-span-2"
      lg="col-span-1"
    >
      <div class="h-full flex flex-col p-16 text-center">
        <h3 class="mt-12 text-25 capitalize">
          Được tài trợ bởi
        </h3>
        <div class="flex-cc flex-grow">
          <img
            class="w-200 lg:w-80% md:w-300"
            :src="getImg('bybit-icon.png')"
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
.canvas-image {
  @apply absolute right-40 bottom-0;
  height: 90%;

  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .8;
}

.main-warp {
  @apply max-w-1400 mx-auto p-16 mt-65;
  @apply grid gap-16 grid-cols-4 md:grid-rows-6;
  min-height: calc(100vh - 12rem);
}

.folder{
  @apply rounded-25 relative h-full;
  //filter: drop-shadow(0 0 0.75rem grey); // TODO: research it
  &::before {
    @apply md:content-[''];
    @apply absolute w-400 h-95 rounded-tl-25 bg-gray;
    content: none;
    top: -6.3rem;
    right: 0;
    clip-path: path('M 0 0 L 205 0 C 300 0, 235 81, 429 63 L 0 90 z');
    transform: scaleX(-1); /* Adjust the angle as needed */

  }
}
</style>
