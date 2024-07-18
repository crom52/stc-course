<template>
  <div class="text-16">
    <ASteps
      :current="currentStep"
      direction="vertical"
      :responsive="false"
      @change="onStepChangedByClick"
    >
      <AStep disabled>
        <template #title>
          Xác nhận học phí
        </template>
        <template #description>
          <div class="card-warp">
            <div class="flex-bc flex-wrap font-600">
              <p class="text-gray">
                Tổng học phí:
              </p>
              <p class="text-18 text-green">
                {{ BASE_PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
              </p>
            </div>
          </div>
        </template>
      </AStep>

      <AStep>
        <template #title>
          Thông tin donate
        </template>
        <template #description>
          <div class="card-warp">
            <h6 class="bank-highlight text-gray-6">
              Donate trực tiếp vào địa chỉ ví
            </h6>
            <div class="pl-16">
              <CopyableText
                copyContent="0x0268Cdc83FDb61755215EC044A676140913389dc"
                showIcon
                class="cursor-pointer hover:text-yel1"
              />
            </div>

            <h6 class="bank-highlight mt-32 text-gray-6">
              Link donate Copperx
            </h6>
            <div class="pl-16">
              <a
                class="cursor-pointer text-blue-5 font-300 hover:underline"
                href="https://buy.copperx.io/payment/payment-link/a4d5cf71-986f-4dc1-8b24-2df63df8bc35"
                target="_blank"
              >
                https://buy.copperx.io/payment/payment-link/a4d5cf71-986f-4dc1-8b24-2df63df8bc35
              </a>
            </div>
          </div>
        </template>
      </AStep>
    </ASteps>
  </div>
</template>

<script lang="ts" setup>
import { Modal, message } from 'ant-design-vue';
import { createVNode } from 'vue';
import { QuestionCircleFilled } from '@ant-design/icons-vue';

const BASE_PRICE = 999;
const currentStep = ref<number>(1);
const isTransferred = ref<boolean>(false);

const bankInfo = [
  {
    key: 'bank',
    title: 'Ngân hàng',
    displayContent: 'Vietcombank',
    copyContent: 'Vietcombank',
  },
  {
    key: 'bank-id',
    title: 'Số tài khoản',
    displayContent: '02 310 0062 6961',
    copyContent: '0231000626961',
  },
  {
    key: 'bank-account-name',
    title: 'Tên tài khoản',
    displayContent: 'NGUYEN MINH PHUC',
    copyContent: 'NGUYEN MINH PHUC',
  },
  {
    key: 'bank-branch',
    title: 'Chi nhánh',
    displayContent: 'Đắk Lắk',
    copyContent: 'Dak Lak',
  },
  {
    key: 'payment-content',
    title: 'Nội dung chuyển khoản',
  },
];

function onCheckTransferred(isChecked: boolean) {
  if (!isChecked) {
    currentStep.value = 1;
    isTransferred.value = false;

    return;
  }

  Modal.confirm({
    title: 'Xác nhận thanh toán!',
    icon: createVNode(QuestionCircleFilled),
    content: 'Bạn đã chuyển khoản thành công và chụp lại màn hình chuyển khoản?',
    okText: 'Xác nhận',
    cancelText: 'Quay lại',
    onOk() {
      isTransferred.value = true;
      currentStep.value = 2;
    },
  });
}

function onStepChangedByClick(step: number) {
  if (step === 2 && !isTransferred.value)
    message.warning({ content: 'Bạn phải xác nhận thanh toán trước khi chuyển đến bước này', duration: 2 });
};

function onClickRedirectToPaymentForm() {
  if (!isTransferred.value)
    return;
  try {
    window?.open('https://stccapital.larksuite.com/share/base/form/shrusXEGjWPhtBFiMSK9VLOXBpc', '_blank')?.focus();
  } catch (e) {
    console.error('cannot redirect');
  }
};
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
@apply font-700 text-18 mb-8 text-gray-6;
}

.card-warp {
@apply p-16 rounded-18 b b-abd bg-white;
}
</style>
