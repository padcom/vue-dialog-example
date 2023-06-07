<template>
  <button @click="showExampleDialog">Example3</button>

  <dialog ref="dialog1">
    <h3>Example 3, Dialog 1</h3>
    <p>Click the button to close this dialog</p>
    <button @click="close('ok')">
      Regular button with close called with result "ok"
    </button>
  </dialog>

  <dialog ref="dialog2">
    <h3>Example 3, Dialog 2</h3>
    <p>Click the button to close this dialog</p>
    <button @click="close('sure')">
      Regular button with close called with result "sure"
    </button>
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createDialogContext } from '../dialog'

const dialog1 = ref<HTMLDialogElement>()
const dialog2 = ref<HTMLDialogElement>()
const { dialog, showModal, close } = createDialogContext(ref<HTMLDialogElement>())

async function showExampleDialog() {
  // we can dynamically change which dialog will be considered when calling `showModal()`
  // by setting the value of ref dialog. Please note that upon mounting the refs to
  // dialog1 and dialog2 will be populated. This means that when `showExampleDialog()`
  // is called we're updating the reference to _the other dialog_.
  dialog.value = dialog.value === dialog1.value ? dialog2.value : dialog1.value

  // then proceed to showing it
  console.log(await showModal())
}
</script>
