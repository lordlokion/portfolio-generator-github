<!-- GeneratedPortfolio.vue -->
<template>
    <div>
      <div v-html="generatedHtml"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        generatedHtml: '',
      };
    },
    mounted() {
      // Fetch the generated HTML code (you can pass it as a prop or use a store)
      // For demonstration, I'm hardcoding an example HTML code here
      const encodedHtml = this.$route.query.htmlCode || "";
    this.generatedHtml = decodeURIComponent(encodedHtml) || "No HTML code provided";    },
  };
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>
  