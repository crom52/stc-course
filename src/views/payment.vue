<template>
  <div class="mx-auto max-w-800 px-8">
    <div class="grid items-center justify-center gap-16 text-center">
      <div class="grid mt-16 gap-16 b rounded-10 bg-white px-16 py-25 text-18">
        <h3 class="text-highlight font-700">
          CHUYỂN KHOẢN QUA NGÂN HÀNG
        </h3>

        <p class="text-highlight">
          _____
        </p>

        <h6>Tổng học phí:</h6>
        <p class="mb-16 mt-8 text-20 text-highlight font-700">
          25.000.000 VND
        </p>
        <div class="mx-auto flex flex-wrap justify-center gap-16">
          <div class="min-w-250 flex-1 overflow-hidden rounded-10">
            <img
              class="h-400 md:block md:h-full"
              :src="getImg('payment-qr.jpg')"
              alt="payment-qr-code"
            >
          </div>

          <b class="hidden basis-1 b-l b-abd md:block" />

          <div class="grid min-w-250 flex-1 items-center">
            <ul class="grid gap-8">
              <li>
                <span>Ngân Hàng:</span>
                <span class="ml-4 text-highlight font-600">VIETCOMBANK</span>
              </li>
              <li>
                <span>Số tài khoản:</span>
                <span class="ml-4 text-highlight font-600">0231000626961</span>
              </li>
              <li>
                <span>Tên tài khoản:</span>
                <span class="ml-4 text-highlight font-600">NGUYEN MINH PHUC</span>
              </li>
              <li>
                <span>Chi nhánh:</span>
                <span class="ml-4 text-highlight font-600">DAK LAK</span>
              </li>
              <li>
                <span>Nội dung chuyển khoản:</span>
                <span class="ml-4 inline-block text-highlight font-600">Email của các anh chị</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid mt-16 gap-16 b rounded-10 bg-white px-16 py-25 text-18">
        <h3 class="text-highlight font-700">
          DONATE BẰNG CRYPTO
        </h3>

        <p class="text-highlight">
          _____
        </p>

        <h6>Tổng học phí:</h6>
        <p class="mb-16 mt-8">
          <span class="text-highlight font-600">999 USD</span>
        </p>
        <div>
          <ul class="grid gap-8">
            <li>
              <span>Link thanh toán:</span>
              <span class="ml-4 text-blue font-600 hover:underline">
                <a target="_blank" href="https://buy.copperx.io/payment/checkout-session/e1a01b52-c746-43c2-84bd-62045e919337">buy.copperx.io</a>
              </span>
            </li>
            <li>
              <span>Hoặc donate trực tiếp về địa chỉ:</span>
              <span class="ml-16 mt-4 block text-highlight font-600">0x0268Cdc83FDb61755215EC044A676140913389dc</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang=ts>
import { getImg } from '@/utils/common.util';
</script>
