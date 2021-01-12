<template>
  <div class="question">
    <div class="title">Чи є вакцина від коронавірусу?</div>
    <div class="answer" v-html="html"></div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    html: String
  },

  computed: {
    q: function() {
      return this.html
    }
  }
}
</script>



<style scoped lang="scss">
.question {
  title {
    font-size: 2em; 
    font-weight: 400;
  }

}
</style>
