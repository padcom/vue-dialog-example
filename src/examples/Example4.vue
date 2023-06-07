<template>
  <button @click="showExampleDialog">Example4</button>

  <ExampleDialog ref="dialog" title="Example4" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ExampleDialog from '../components/ExampleDialog.vue'

const dialog = ref<InstanceType<typeof ExampleDialog>>()

async function showExampleDialog() {
  console.log(await dialog.value?.showModal())
}
</script>
