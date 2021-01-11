<template>
  <div id="app">
    {{msg}}
  </div>

  
</template>

<script>


export default {
  name: 'app',

  data() {
    return {
      msg: "[уєчка"
    }
  },

  components: {
  },
  
  mounted() {
    console.log(window)
    this.msg = window.data.msg;
  },

  destroyed() {
  
  },

  methods: {
  
  },

  watch: {
  
  }

}
</script>

<style lang="scss">

html, svg {
  font-family:
    'ProximaNova',
    'Helvetica Neue',
    Arial,
    sans-serif;

  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

:root {
  --col-salmon: #ff673f; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  line-height: 1.5;
  margin: 0 auto;
}

</style>