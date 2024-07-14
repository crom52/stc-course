<template>
  <div class="main-page">
    <div class="folder text-red">
      <div class="p-32">
        <h3>hello this is content</h3>
        <div>hello this is ok</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
.folder{
  width: 80%;
  height: 310px;
  margin: 10em auto 10em;

  border-radius: 5px 25px 25px 25px;
  filter: drop-shadow(0 0 0.75rem grey);
  background: rgb(145, 252, 149);
  position: relative;
}

.folder::before{
  content:  '';
  position: absolute;
  top: -18px;
  width: 200px;
  height: 25px;
  background: rgb(145, 252, 149);
  border-radius: 25px 0 0 0;
  clip-path: path('M 0 0 L 160 0 C 185 2, 175 16, 200 18 L 0 50 z');
}

// .banner-warp {
//   background-image: url('../assets//images/offer-background.jpg');
//   background-repeat: no-repeat;
//   background-size: cover;
// }

// .proposal-highlight {
//   position: relative;
//   &::after {
//     content: "";
//     z-index: -1;
//     bottom: -7px;
//     opacity: .8;
//     left: -2px;
//     @apply absolute rounded-3/2 w-full h-1/2 shadow-lg shadow-gray;
//   }
// }

// .btn-course {
//   @apply h-50 text-20 font-600 min-w-200;
// }

// :deep(.slick-slide) {
//   @apply h-350 overflow-hidden text-white p-26 ;
//   @apply bg-cover;
//   background-image: url("../assets/images/bg-card3.jpg");
//   div:has(#carousel-warp) {
//     @apply h-full;
//   }
// }
</style>
