<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <div class="wrapper">
      <app-progress :progress="onProgress"></app-progress>
      <div class="alert alert-secondary">
        <app-start-screen v-if="state == 'start'"
                          @startGame="startGame"></app-start-screen>
        <app-question v-else-if="state == 'question'"
                      @success="onSuccess"
                      @error="onError"></app-question>
        <app-message v-else-if="state == 'message'"
                      @next="onNext"
                      :type="message.type"
                      :text="message.text"></app-message>
        <app-grac v-else-if="state == 'grac'"
                  @exit="onExit"></app-grac>
      </div>
    </div>
    <div class="wrapper">
      <app-table :right="rightAnswer"
                  :wrong="wrongAnswer"></app-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Math Test',
      state: 'start',
      progress: 0,
      rightAnswer: 0,
      wrongAnswer: 0,
      message: {
        type: '',
        text: ''
      }
    }
  },
  computed: {
    onProgress() {
      return this.progress + '%'
    }
  },
  methods: {
    onExit() {
      this.state = 'start'
    },
    startGame() {
      this.state = 'question'
    },
    onSuccess(msg) {
      this.state = 'message'
      this.message.type = 'success'
      this.message.text = msg;
      if (this.progress < 100) {
        this.progress += 10
        this.rightAnswer += 1
      } else {
        this.state = 'grac'
        this.progress = 0
        this.rightAnswer = 0;
        this.wrongAnswer = 0;
      }
    },
    onError(msg) {
      this.state = 'message'
      this.message.type = 'warning'
      this.message.text = msg
      this.progress -= 10
      this.wrongAnswer += 1
    },
    onNext() {
      this.state = 'question'
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 35px;
    margin-top: 35px;
  }

  .wrapper {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .alert-secondary {
    height: 160px;
  }

</style>
