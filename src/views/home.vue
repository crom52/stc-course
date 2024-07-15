<template>
  <div class="main-page main-warp">
    <!-- folder1 -->
    <div
      class="col-span-4 row-span-2"
      lg="row-span-4"
    >
      <div class="folder bg-gray">
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
              class="grid h-full w-full items-center"
              mode="out-in"
            >
              <li
                v-show="!display"
                key="1"
              >
                <p>Đừng FOMO</p>
                <p>
                  Đầu tư hiệu quả <span class="inline-block">bằng kiến thức</span>
                </p>
              </li>

              <li
                v-show="display"
                key="2"
              >
                <p>Chọn dự án chất lượng</p>
                <p class="inline-block">
                  đừng chọn số lượng.
                </p>
              </li>
            </transitiongroup>
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
      <div class="p-16">
        <div class="text-right">
          <i class="i-material-symbols:arrow-outward-rounded cursor-pointer text-40 text-red1" />
        </div>
        <ul class="text-25">
          <li>Thông tin khoá học</li>
          <li class="uppercase">
            STC-K03
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
  @apply absolute right-0 bottom-0;
  height: 90%;

  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .8;
}

.main-warp {
  @apply max-w-1400 mx-auto p-16 mt-60;
  @apply grid gap-16 grid-cols-4 grid-rows-6;
  min-height: calc(100vh - 12rem);
}

.folder{
  @apply rounded-25 relative h-full;
  filter: drop-shadow(0 0 0.75rem grey); // TODO: research it
  &::before {
    @apply md:content-[''];
    @apply absolute w-300 h-60 rounded-tl-25;
    content: none;
    top: -39px;
    right: 0;
    background: rgb(145, 252, 149);
    // clip-path: path('M 0 0 L 160 0 C 193 0, 165 53, 245 43 L 0 60 z');

  }
}
</style>
