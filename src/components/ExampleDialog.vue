<template>
  <Dialog ref="dialog">
    <h3>ExampleDialog</h3>
    <p>Click the button to close this dialog</p>
    <CloseButton result="done" />
    <p class="note">
      <strong>Please note, that this example is very much not justified to be that complex.</strong>
      In 99% of the cases you will be just fine using the <code>createDialogContext</code>
      with a <code>ref</code> to the actual <code>HTMLDialogElement</code>. That'll give
      you <code>showModal()</code>, <code>close()</code> and both of those
      <code>provide</code>d in the context, available through <code>useDialogContext</code>.
      With that <code>provide</code>d you can create custom controls, like the
      <code>CloseButton</code>.
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from './Dialog.vue'
import CloseButton from './CloseButton.vue'

const dialog = ref<typeof Dialog>()

function showModal() {
  return dialog.value?.showModal()
}

defineExpose({
  showModal
})
</script>

<style>
dialog {
  max-width: 50%;
}

strong {
  display: block;
  margin-bottom: 32px;
  text-transform: capitalize;
}

.note {
  font-size: 1.5rem;
  margin-top: 32px;
  padding-top: 32px;
  border-top: solid 1px black;
  text-align: justify;
}
</style>
