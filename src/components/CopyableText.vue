<template>
  <span
    v-bind="$attrs"
    @click="onCopy"
  >
    <slot>
      {{ copyContent }}
    </slot>
  </span>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';

const props = defineProps<{
  copyContent: string | number;
  showIcon?: boolean;
}>();

const { copyContent } = toRefs(props);

const onCopy = async () => {
  try {
    await navigator.clipboard.writeText(copyContent.value.toString());
    message.success({
      content: `Đã sao chép: ${copyContent.value}`,
      duration: 1.2,
      key: 'copy-message',
    });
  } catch (e) {
    message.error({
      content: 'Sao chép thất bại',
      duration: 1.2,
      key: 'copy-message',
    });
  }
};
</script>
