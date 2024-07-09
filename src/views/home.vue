<template>
  <div>
    <canvas
      id="gradient-canvas"
      data-transition-in="true"
      class="isLoaded fixed right-[-2px] top-10% z-10 h-80vh md:w-1/3"
      width="300"
      height="800"
    />

    <div class="relative z-20 ml-10% uppercase">
      <div class="mt-20% h-300 p-32 px-12">
        <TransitionGroup
          name="fade"
          tag="ul"
          class="mt-16 max-w-60% text-6.1vw font-900 lg:text-70"
          mode="out-in"
        >
          <li
            v-show="!display"
            key="1"
            class="text-highlight"
          >
            <p>Đừng FOMO.</p>
            <p>
              Đầu tư hiệu quả <span class="block">bằng kiến thức.</span>
            </p>
          </li>

          <li
            v-show="display"
            key="2"
          >
            <p class="block whitespace-nowrap">
              Chọn dự án <span>chất lượng</span>
            </p>
            <p class="block whitespace-nowrap">
              đừng chọn <span>số lượng.</span>
            </p>
          </li>
        </transitiongroup>
        <!--        <div class="absolute left-10% top-50% mt-32 flex flex-wrap gap-16"> -->
        <div class="mt-32 flex flex-wrap gap-16">
          <AButton
            class="h-60 w-300 b-highlight text-24 text-highlight font-600"
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
}, 3500);
</script>

<style scoped lang="less">
.isLoaded {
  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .7;
}
</style>
