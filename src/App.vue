<template>
  <Example1 />
  <Example2 />
  <Example3 />
  <Example4 />
</template>

<script lang="ts" setup>
import Example1 from './examples/Example1.vue'
import Example2 from './examples/Example2.vue'
import Example3 from './examples/Example3.vue'
import Example4 from './examples/Example4.vue'
</script>

<style>
button + dialog + button,
button + dialog + dialog + button {
  margin-left: 4px;
}
</style>
