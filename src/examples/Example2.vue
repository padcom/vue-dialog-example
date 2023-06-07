<template>
  <button @click="showExampleDialog">Example2</button>

  <dialog ref="dialog">
    <h3>Example 2</h3>
    <p>Click the button to close this dialog</p>
    <button @click="close('ok')">
      Regular button with close called with result "ok"
    </button>
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createDialogContext } from '../dialog'

const dialog = ref<HTMLDialogElement>()
const { showModal, close } = createDialogContext(dialog)

async function showExampleDialog() {
  console.log(await showModal())
}
</script>
