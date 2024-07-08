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
    <div class="relative z-20">
      <div class="mt-30% p-32 px-12 md:mt-20%">
        <p font="900 italic" text="25">
          #Slogan
        </p>
        <ul class="mt-16 max-w-60% text-30 font-900" md="text-55">
          <li class="text-highlight">
            Đừng FOMO.
          </li>
          <li
            class="text-25 text-highlight"
            md="text-50"
          >
            Đầu tư hiệu quả bằng kiến thức.
          </li>
          <li>
            Chọn dự án chất lượng, <span class="inline-block">Đừng chọn số lượng.</span>
          </li>
        </ul>
      </div>
      <div class="mt-32 flex flex-wrap gap-16">
        <AButton
          size="large"
          shape="round"
          @click="$router.push({ name: 'Details' })"
        >
          Thông tin khoá học
        </AButton>
        <AButton
          size="large"
          type="primary"
          shape="round"
          @click="$router.push({ name: 'Payment' })"
        >
          Ghi danh
        </AButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="css">
.isLoaded {
  background-image: url("../assets/images/111-Photoroom.png");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .7;
}
</style>
