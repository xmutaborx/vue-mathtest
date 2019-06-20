<template>
  <div>
    <h3>{{x}} + {{y}} = ?</h3>
    <hr>
    <div class="buttons">
      <button class="btn btn-success"
              v-for="(value, index) in answers"
              v-bind:key="index"
              @click="onAnswer(value)">{{ value }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        x: randNum(100, 200),
        y: randNum(100, 200)
      }
    },
    methods: {
      onAnswer(value) {
        if (value == this.rightAnswer) {
          this.$emit('success', this.rightAnswer)
        } else {
          this.$emit('error', `${this.x} + ${this.y} = ${this.rightAnswer}!`)
        }
      }
    },
    computed: {
      rightAnswer() {
        return this.x + this.y
      },
      answers() {
        let res = [this.rightAnswer]

        while(res.length < 4) {
          let num = randNum(this.rightAnswer - 20, this.rightAnswer + 20)
          
          if (res.indexOf(num) === -1) {
            res.push(num)
          } 
        }
      
        return res.sort(function(){
          return Math.random() - 0.5;
        }) 
      }
    }
  } 

  function randNum(max, min) {
    let diff = max - min;
    return Math.floor(Math.random() * (diff + 1)) + min
  }
</script>

<style>
  .buttons {
    display: flex;
    justify-content: space-around;
  }
</style>
