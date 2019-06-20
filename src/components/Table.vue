<template>
  <div class="card">
    <p class="alert alert-success">Right answer: {{ right }}</p>
    <p class="alert alert-warning">Wrong answer: {{ wrong }}</p>
  </div>
</template>

<script>
export default {
  props: ['right', 'wrong']
}
</script>

<style>
  .card p {
    margin-bottom: 0;
  }
</style>
