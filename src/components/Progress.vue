<template>
  <div class="progress">
    <div class="progress-bar" :style="{ width: progress}"></div>
  </div>
</template>

<script>
export default {
  props: ['progress']
}
</script>

<style>

</style>
