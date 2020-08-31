<template>
  <div id="app">
    <MarkdownPreview/>
  </div>
</template>

<script>
import MarkdownPreview from './components/MarkdownPreview.vue'

export default {
  name: 'App',
  components: {
    MarkdownPreview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0px;
  margin-bottom: 10px;
}
  p {
    margin: 0px auto 0px auto;
  }
  
</style>
