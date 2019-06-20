<template>
  <div>
    <h3>Congratulation</h3>
    <button class="btn btn-success" @click="$emit('exit')">QUIT</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h3 {
    margin-bottom: 50px;
  }
</style>
