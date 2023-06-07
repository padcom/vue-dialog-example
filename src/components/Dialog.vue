<template>
  <dialog ref="dialog">
    <h2>{{ title }}</h2>
    <slot :close="close" />
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createDialogContext } from '../dialog'

const dialog = ref<HTMLDialogElement>()
const { showModal, close } = createDialogContext(dialog)

defineProps({
  title: { type: String, default: 'Dialog title' },
})
defineExpose({
  showModal
})
</script>
