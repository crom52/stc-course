<template>
  <div class="mx-auto mt-16 max-w-800">
    <div class="grid items-center justify-center gap-16 text-center">
      <h3 class="w-full text-20 text-highlight">
        Thông Tin Thanh Toán
      </h3>

      <p>
        _____
      </p>

      <div class="mt-16 flex flex-wrap justify-center gap-32">
        <div class="w-300 text-left">
          <h3 class="text-15 text-highlight">
            1. CHUYỂN KHOẢN QUA NGÂN HÀNG
          </h3>
          <p class="mt-16">
            Tổng học phí: <span class="text-highlight font-600">25.000.000 VND</span>
          </p>
          <div class="mt-16">
            <ul class="grid gap-8">
              <li>
                <span>Ngân Hàng:</span>
                <span class="ml-4 text-highlight">VIETCOMBANK</span>
              </li>
              <li>
                <span>Số tài khoản:</span>
                <span class="ml-4 text-highlight">0231000626961</span>
              </li>
              <li>
                <span>Tên tài khoản:</span>
                <span class="ml-4 text-highlight">NGUYEN MINH PHUC</span>
              </li>
              <li>
                <span>Chi nhánh:</span>
                <span class="ml-4 text-highlight">DAK LAK</span>
              </li>
              <li>
                <span>Nội dung chuyển khoản:</span>
                <span class="ml-4 text-highlight">Email của các anh chị</span>
              </li>
            </ul>
            <div class="mt-16">
              <img :src="getImg('qr-code-2.jpg')" alt="qr-code-payment">
            </div>
          </div>
        </div>

        <b class="hidden b-l b-abd md:block" />

        <div class="w-300 text-left">
          <h3 class="text-15 text-highlight">
            2. DONATE BẰNG CRYPTO
          </h3>
          <p class="mt-16">
            Tổng học phí: <span class="text-highlight font-600">999 USD</span>
          </p>
          <div class="mt-16">
            <ul class="grid gap-8">
              <li>
                <span>Link thanh toán:</span>
                <span class="ml-4 text-blue hover:underline">
                  <a target="_blank" href="https://buy.copperx.io/payment/checkout-session/e1a01b52-c746-43c2-84bd-62045e919337">buy.copperx.io</a>
                </span>
              </li>
              <li>
                <span>Hoặc donate trực tiếp về địa chỉ:</span>
                <span class="ml-16 mt-4 block text-highlight">0x0268Cdc83FDb61755215EC044A676140913389dc</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang=ts>
import { getImg } from '@/utils/common.util';
</script>
