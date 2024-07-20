<template>
  <div class="text-16">
    <ASteps
      :current="currentStepKey"
      direction="vertical"
      :responsive="false"
      @change="onStepChangedByClick"
    >
      <AStep disabled>
        <template #title>
          <p class="font-700">
            Thông tin học viên ghi danh
          </p>
        </template>
        <template #description>
          <div class="card-warp max-w-500">
            <AForm
              ref="formRef"
              :model="formState"
              :rules="rules"
              @finish="handleFinish"
            >
              <div>
                <AFormItem name="name">
                  <p class="mb-4 text-gray-6 font-600">
                    Họ và tên
                  </p>
                  <AInput
                    v-model:value="formState.name"
                    :maxlength="50"
                    size="large"
                  />
                </AFormItem>

                <AFormItem name="phone">
                  <p class="mb-4 text-gray-6 font-600">
                    Số điện thoại
                  </p>
                  <AInput
                    v-model:value="formState.phone"
                    :maxlength="12"
                    type="number"
                    size="large"
                  />
                </AFormItem>
              </div>

              <!-- Submit -->
              <div class="mt-50 flex justify-end">
                <AButton
                  htmlType="submit"
                  :disabled="false"
                  class="h-40 bg-green-4 b-white! text-white!"
                >
                  <div>
                    Đến bước tiếp theo
                    <i class="i-iconamoon:arrow-right-6-circle-fill" />
                  </div>
                </AButton>
              </div>
            </AForm>
          </div>
        </template>
      </AStep>

      <AStep disabled>
        <template #title>
          <p class="font-700">
            Thông tin thanh toán và chuyển khoản
          </p>
        </template>
        <template #description>
          <div v-if="currentStepKey > 0">
            <div class="card-warp">
              <div class="flex-bc flex-wrap font-600">
                <p class="text-gray">
                  Tổng học phí:
                </p>
                <p class="text-18 text-green">
                  {{ formatVND(BASE_PRICE) }}
                </p>
              </div>
            </div>
            <div class="card-warp mt-16 flex gap-16">
              <div class="flex-1">
                <h6 class="bank-highlight">
                  Chuyển khoản ngân hàng Việt Nam
                </h6>

                <!-- info -->
                <div class="grid mt-16 flex-1 gap-8 font-500">
                  <template v-for="item in bankInfo" :key="item.key">
                    <template v-if="item.key !== 'payment-content'">
                      <div class="flex-bc flex-wrap">
                        <p class="min-w-150 text-gray">
                          {{ item.title }}
                        </p>
                        <CopyableText
                          :copyContent="item.copyContent || ''"
                          showIcon
                          class="cursor-pointer whitespace-nowrap"
                        >
                          {{ item.displayContent }}
                        </CopyableText>
                      </div>
                    </template>

                    <template v-else>
                      <div class="flex flex-wrap justify-between">
                        <p class="min-w-150 text-gray">
                          {{ item.title }}
                        </p>
                        <CopyableText
                          :copyContent="paymentContent || ''"
                          showIcon
                          class="cursor-pointer whitespace-nowrap whitespace-nowrap text-right"
                        >
                          {{ paymentContent }}
                        </CopyableText>
                      </div>
                    </template>
                  </template>
                </div>

                <!-- confirm -->
                <p class="mt-32 md:mt-90">
                  <i class="i-iconamoon:information-circle-fill text-blue-5" />
                  <span class="text-gray-5">
                    Chụp lại màn hình chuyển khoản để xác nhận thanh toán
                  </span>
                </p>
              </div>
              <div class="hidden flex-1 b-l-2 b-abd md:block">
                <div class="mx-auto h-400 w-fit overflow-hidden rounded-20">
                  <img
                    class="h-full"
                    :src="getImg('payment-qr.jpg')"
                    alt="qr payment"
                  >
                </div>
              </div>
            </div>
          </div>
          <p v-else class="text-16 text-gray font-500">
            Bạn cần hoàn thiện bước 1 để được hướng dẫn bước này
          </p>
        </template>
      </AStep>

      <AStep>
        <template #title>
          <div class="font-700" :class="{ 'text-green': currentStepKey > 0 }">
            Xác nhận thanh toán  <i class="i-lets-icons:done-ring-round" />
          </div>
        </template>
        <template #description>
          <div
            v-if="currentStepKey > 0"
            class="cursor-pointer text-blue hover:underline"
            @click="onClickRedirectToPaymentGoogleForm"
          >
            Điều hướng đến Form xác nhận thanh toán
            <i class="i-material-symbols:arrow-outward-rounded" />
          </div>
          <p v-else class="text-16 text-gray font-500">
            Bạn cần hoàn thiện bước 2 để được hướng dẫn bước này
          </p>
        </template>
      </AStep>
    </ASteps>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { formatVND, getImg } from '@/utils/common.util';

const BASE_PRICE = 25000000;

const currentStepKey = ref<number>(0);

const formRef = ref<FormInstance>();

const formState = reactive({
  name: '',
  phone: '',
});

const paymentContent = computed(() => {
  const name = formState.name.trim().normalize('NFD').replace(/[\u0300-\u036F]/g, '');

  return `STCK03 - ${name} - ${formState.phone}`;
});

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

function onStepChangedByClick(step: number) {
  if (!(currentStepKey.value === 1 && step === 2))
    return;
  currentStepKey.value = step;
};

function onClickRedirectToPaymentGoogleForm() {
  try {
    window?.open('https://stccapital.larksuite.com/share/base/form/shrusXEGjWPhtBFiMSK9VLOXBpc', '_blank');
  } catch (e) {
    console.error('cannot redirect');
  }
};

const checkName = async (_rule: Rule, value: string) => {
  const trimmedName = value.trim();
  if (!trimmedName)
    return Promise.reject(new Error('Nhập tên của bạn'));

  if (trimmedName.length < 5)
    return Promise.reject(new Error('Tên chưa đúng định dạng'));

  if (!trimmedName.includes(' '))
    return Promise.reject(new Error('Xin hãy nhập tên đầy đủ (họ và tên)'));

  return Promise.resolve();
};

const checkPhone = async (_rule: Rule, value: number) => {
  if (!value)
    return Promise.reject(new Error('Nhập số điện thoại của bạn'));

  if (Array.from(value?.toString())[0] !== '0')
    return Promise.reject(new Error('Số điện thoại phải bắt đầu bằng số 0'));

  if (value?.toString()?.length < 8 || value?.toString()?.length > 12)
    return Promise.reject(new Error('Số điện thoại chưa đúng định dạng'));

  return Promise.resolve();
};

const rules: Record<string, Rule[]> = {
  name: [{ validator: checkName, trigger: 'change', warningOnly: true }],
  phone: [{ required: true, validator: checkPhone, trigger: 'change' }],
};

const handleFinish = () => {
  currentStepKey.value = 1;
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
