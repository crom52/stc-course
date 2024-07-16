<template>
  <div>
    <h3 class="card-title">
      Thông tin thanh toán
    </h3>
    <div class="card-warp">
      <div>
        <div class="flex-bc flex-wrap font-600">
          <p class="text-gray">
            Tổng Tiền:
          </p>
          <p class="text-18 text-green">
            25.000.000đ
          </p>
        </div>
      </div>
    </div>

    <h3 class="card-title mt-32">
      Thông tin chuyển khoản
    </h3>
    <div class="card-warp">
      <h6 class="bank-highlight">
        Chuyển khoản ngân hàng Việt Nam
      </h6>

      <!-- info -->
      <div class="grid mt-8 gap-4 font-500">
        <div class="flex-bc flex-wrap">
          <p class="text-gray">
            Ngân hàng:
          </p>
          <p class="">
            Vietcombannk
          </p>
        </div>

        <div class="flex-bc flex-wrap">
          <p class="text-gray">
            Số tài khoản:
          </p>
          <p class="">
            0231000626961
          </p>
        </div>

        <div class="flex-bc flex-wrap">
          <p class="text-gray">
            Tên tài khoản:
          </p>
          <p class="capitalize">
            Nguyễn Minh Phúc
          </p>
        </div>

        <div class="flex-bc flex-wrap">
          <p class="text-gray">
            Chi nhánh:
          </p>
          <p class="capitalize">
            Dak Lak
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.bank-highlight {
  @apply relative ml-8;
  @apply font-600;
  &::after {
    @apply absolute left--8 top-4;
    @apply  h-1/2 w-3 rounded-1/2 bg-red1;
    content: '';
  }
}
.card-title {
  @apply font-700 text-18 mb-8;
}

.card-warp {
  @apply p-16 rounded-18 b b-abd;
}
</style>
