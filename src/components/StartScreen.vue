<template>
  <div>
    <h3>Press start</h3>
    <button class="btn btn-success" 
            @click="$emit('startGame')">START GAME</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h3 {
    text-align: center;
  }
</style>
