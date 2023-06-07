<template>
  <button @click="showExampleDialog">Example1</button>

  <dialog ref="dialog">
    <p>Click the button to close this dialog</p>
    <button @click="dialog?.close()">Close</button>
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialog = ref<HTMLDialogElement>()

function showExampleDialog() {
  dialog.value?.showModal()
}
</script>
