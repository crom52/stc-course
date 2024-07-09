<template>
  <div>
    <canvas
      id="gradient-canvas"
      style="clip-path: polygon(100px 0px, 100% 0px, calc(100% + 225px) 100%, 250px 100%); filter: blur(0px);"
      data-transition-in="true"
      class="isLoaded fixed right-[-2px] top-0 z-10 h-screen w-[80%] shadow-abd md:w-1/2"
      width="454"
      height="600"
    />

    <div class="relative z-20 uppercase">
      <div class="mt-20% h-300 p-32 px-12">
        <TransitionGroup
          name="fade"
          tag="ul"
          class="mt-16 max-w-60% text-6.2vw font-900 lg:text-70"
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
        <!--        <div class="absolute left-10% top-50% mt-32 flex flex-wrap gap-16"> -->
        <div class="mt-32 flex flex-wrap gap-16">
          <AButton
            class="h-60 w-300 text-24 text-highlight font-600"
            @click="$router.push({ name: 'Details' })"
          >
            Thông tin khoá học
          </AButton>

          <AButton
            type="primary"
            class="h-60 w-300 text-24 font-600"
            @click="$router.push({ name: 'Payment' })"
          >
            Ghi danh
          </AButton>
        </div>
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
.isLoaded {
  margin: 2% 0;
  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .7;
}
</style>
