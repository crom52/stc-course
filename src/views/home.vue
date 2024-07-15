<template>
  <div class="main-page main-warp">
    <!-- folder1 span 4 -->
    <div
      class="col-span-4 row-span-2"
      md="row-span-4"
    >
      <div class="folder bg-gray">
        <div class="h-full flex p-16">
          <!-- Slogan -->
          <div
            class="flex-1 text-center"
            md="text-left"
          >
            <TransitionGroup
              name="fade"
              tag="ul"
              class="mt-16 max-w-60% text-6vw font-900 lg:text-70"
              mode="out-in"
            >
              <li
                v-show="!display"
                key="1"
                class="text-highlight"
              >
                <p>Đừng FOMO.</p>
                <p>
                  Đầu tư hiệu quả bằng kiến thức.
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
            Image
          </div>
        </div>
      </div>
    </div>

    <!-- card video span 2 -->
    <div
      class="col-span-4 row-span-2 rounded-25 bg-white text-red shadow-xl"
      md="col-span-2"
    >
      <div class="h-full p-16">
        <div class="mx-auto h-inherit overflow-hidden rounded-10">
          <iframe
            class="h-inherit w-full"
            src="https://www.youtube.com/embed/mMUYSM9daF4"
          />
        </div>
      </div>
    </div>

    <!-- card course name span 1 -->
    <div
      class="col-span-2 row-span-2 rounded-25 bg-white text-red shadow-xl"
      md="col-span-1"
    >
      <div class="p-16">
        <h3>hello this is content</h3>
        <div>hello this is ok</div>
      </div>
    </div>

    <!-- card other name span 1 -->
    <div
      class="col-span-2 row-span-2 rounded-25 bg-white text-red shadow-xl"
      md="col-span-1"
    >
      <div class="p-16">
        <h3>hello this is content</h3>
        <div>hello this is ok</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const display = ref<boolean>(false);

setInterval(() => {
  display.value = !display.value;
}, 2000);
</script>

<style scoped lang="less">
.main-warp {
  @apply max-w-1200 mx-auto p-16 mt-60;
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
