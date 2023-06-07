<template>
  <button @click="close(result)">
    <slot>CloseButton with default text and result "{{ result }}"</slot>
  </button>
</template>

<script lang="ts" setup>
import { useDialogContext } from '../dialog'

const { close } = useDialogContext()

defineProps({
  result: { type: String, default: 'ok' },
})
</script>
