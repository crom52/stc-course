<template>
  <div>
    <div class="grid items-center justify-center gap-16">
      <ul class="text-highlight mt-16 text-center text-25">
        <li>Dừng FOMO. Đầu tư hiệu quả bằng kiến thức.</li>
        <li>Chọn dự án chất lượng, Đừng chọn số lượng.</li>
      </ul>

      <p class="text-center">
        ____
      </p>

      <h3 class="text-highlight mt-16 text-center text-25">
        Khoá học Blockchain Toàn diện Chuyên sâu từ Cơ bản đến Nâng cao
      </h3>
      <div class="mx-auto overflow-hidden rounded-10">
        <iframe
          width="600"
          height="400"
          class="rounded-10"
          src="https://www.youtube.com/embed/mMUYSM9daF4"
        />
      </div>
      <AButton
        size="large"
        type="primary"
        @click="$router.push({ name: 'Register' })"
      >
        Thông tin các khoá học và đăng ký
      </AButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
