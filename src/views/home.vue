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
        class="lg: mt-15% text-30 font-900"
        md="text-35"
        lg="text-50"
      >
        Đừng FOMO.
        <br>
        Đầu tư hiệu quả bằng kiến thức.
      </h3>

      <p
        class="mt-16 text-18"
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
          class="btn-course :hover:bg-gradient-to-l from-#23f1a3 to-#66adf3 bg-gradient-to-r"
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
      <!--      <i class="svg:bybit-logo-white h-50 w-40" /> -->
      <div class="bg-white">
        <!--        <ACarousel autoplay> -->
        <div><p>1</p></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
        <div><p>4</p></div>
        <!--        </ACarousel> -->
      </div>
    </div>

    <!--    <div class="relative z-20 ml-10% uppercase"> -->
    <!--      <div class="mt-20% h-300 p-32 px-12"> -->
    <!--        <TransitionGroup -->
    <!--          name="fade" -->
    <!--          tag="ul" -->
    <!--          class="mt-16 max-w-60% text-6.1vw font-900 lg:text-70" -->
    <!--          mode="out-in" -->
    <!--        > -->
    <!--          <li -->
    <!--            v-show="!display" -->
    <!--            key="1" -->
    <!--            class="text-highlight" -->
    <!--          > -->
    <!--            <p>Đừng FOMO.</p> -->
    <!--            <p> -->
    <!--              Đầu tư hiệu quả <span class="block">bằng kiến thức.</span> -->
    <!--            </p> -->
    <!--          </li> -->

    <!--          <li -->
    <!--            v-show="display" -->
    <!--            key="2" -->
    <!--          > -->
    <!--            <p class=""> -->
    <!--              Chọn dự án <span class="block">chất lượng</span> -->
    <!--            </p> -->
    <!--            <p class="block whitespace-nowrap"> -->
    <!--              đừng chọn <span>số lượng.</span> -->
    <!--            </p> -->
    <!--          </li> -->
    <!--        </transitiongroup> -->
    <!--        &lt;!&ndash;        <div class="absolute left-10% top-50% mt-32 flex flex-wrap gap-16"> &ndash;&gt; -->
    <!--        <div class="mt-32 flex flex-wrap gap-16"> -->
    <!--          <AButton -->
    <!--            class="h-60 w-300 b-highlight text-24 text-highlight font-600" -->
    <!--            @click="$router.push({ name: 'Details' })" -->
    <!--          > -->
    <!--            Thông tin khoá học -->
    <!--          </AButton> -->

    <!--          <AButton -->
    <!--            type="primary" -->
    <!--            class="h-60 w-300 text-24 font-600" -->
    <!--            @click="$router.push({ name: 'Payment' })" -->
    <!--          > -->
    <!--            Ghi danh -->
    <!--          </AButton> -->
    <!--        </div> -->
    <!--      </div> -->
    <!--    </div> -->
  </div>
</template>

<script lang="ts" setup>
const display = ref<boolean>(false);

setInterval(() => {
  display.value = !display.value;
}, 3500);
</script>

<style scoped lang="less">
.btn-course {
  @apply h-50 text-20 font-600 min-w-200;
}

.main-page {
  @apply h-screen overflow-hidden;
}

.thump-image {
  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
}

//:deep(.slick-slide) {
//  text-align: center;
//  height: 160px;
//  line-height: 160px;
//  background: #364d79;
//  overflow: hidden;
//}
//:deep(.slick-slide h3) {
//  color: #fff;
//}
</style>
