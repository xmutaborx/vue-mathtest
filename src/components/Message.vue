<template>
  <div>
    <h2 :class="'alert-' + type"> {{type}} </h2>
    <p> {{text}} </p>
    <hr>
    <button class="btn btn-primary" @click="$emit('next')">
      Continue
    </button>
  </div>
</template>

<script>
export default {
  props: ['type', 'text']
}
</script>

<style>

</style>
