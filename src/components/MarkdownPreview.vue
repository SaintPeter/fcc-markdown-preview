<template>
  <div id="container">
    <div class="column">
      <h2>Markdown</h2>
      <textarea id="editor" @keyup="textarea_keyup" v-model="content"></textarea>  
    </div>
    
    <div class="column">
      <h2>Preview</h2>
      <div id="preview" v-html="content_markdown"></div>  
    </div>
  </div>
</template>


<script>
  const marked = require('marked');
  marked.setOptions({
    breaks: true
  })

  export default {
    name: 'MarkdownPreview',
    data: function () {
      this.content = "";
      this.content_markdown = "";
      return {
        content: this.content,
        content_markdown: this.content_markdown
      }
    },
    methods: {
      textarea_keyup: function () {
        this.content_markdown = marked(this.content);
      }        
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  #container {
    display: flex;
    height: 80vh;
  }
  
  .column {
    box-sizing: border-box;
    width: 50%;
    margin: 5px;
    flex-grow: 1;
  }
  
  #editor {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  
  #preview {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    padding: 5px;
  }
</style>
