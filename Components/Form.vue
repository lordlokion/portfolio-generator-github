<!-- PortfolioForm.vue -->
<template>
  <div class="portfolio-form">
    <label for="title">Title:</label>
    <input v-model="title" id="title" placeholder="Title" />

    <label for="name">Name:</label>
    <input v-model="name" id="name" placeholder="Hi 👋, I'm" />

    <label for="work">Work:</label>
    <div>
      <label for="workProjectName">Project Name:</label>
      <input v-model="workProjectName" id="workProjectName" placeholder="Project Name" />

      <label for="workProjectLink">Project Link:</label>
      <input v-model="workProjectLink" id="workProjectLink" placeholder="Project Link" />
    </div>

    <label for="collaborate">👯 I’m looking to collaborate on:</label>
    <div>
      <label for="collaborateProjectName">Project Name:</label>
      <input v-model="collaborateProjectName" id="collaborateProjectName" placeholder="Project Name" />

      <label for="collaborateProjectLink">Project Link:</label>
      <input v-model="collaborateProjectLink" id="collaborateProjectLink" placeholder="Project Link" />

      <label for="helpWith">🤝 I’m looking for help with:</label>
      <input v-model="helpWith" id="helpWith" placeholder="Project Name" />

      <label for="helpWithLink">Project Link:</label>
      <input v-model="helpWithLink" id="helpWithLink" placeholder="Project Link" />
    </div>

    <label for="learning">🌱 I’m currently learning:</label>
    <input v-model="learning" id="learning" placeholder="Frameworks, courses, etc." />

    <label for="askMe">💬 Ask me about:</label>
    <input v-model="askMe" id="askMe" placeholder="React, Vue, and GSAP" />

    <label for="reachMe">How to reach me:</label>
    <input v-model="reachMe" id="reachMe" placeholder="example@gmail.com" />

    <label for="projectsLink">All of my projects are available at:</label>
    <input v-model="projectsLink" id="projectsLink" placeholder="Portfolio Link" />

    <label for="articles">📝 I regularly write articles on:</label>
    <input v-model="articles" id="articles" placeholder="Blog Link" />

    <label for="experiences">📄 Know about my experiences:</label>
    <input v-model="experiences" id="experiences" placeholder="Resume Link" />

    <label for="funFact">⚡ Fun fact:</label>
    <input v-model="funFact" id="funFact" placeholder="Fun Fact" />

    <button @click="generatePortfolio">Generate Portfolio</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      name: "",
      workProjectName: "",
      workProjectLink: "",
      collaborateProjectName: "",
      collaborateProjectLink: "",
      helpWith: "",
      helpWithLink: "",
      learning: "",
      askMe: "",
      reachMe: "",
      projectsLink: "",
      articles: "",
      experiences: "",
      funFact: "",
    };
  },
  methods: {
    generatePortfolio() {
  alert(this.generateHtmlCode())
},

    generateHtmlCode() {
      return `<html>
                <head>
                  <title>${this.title}</title>
                  <style>
                    body {
                      font-family: 'Arial', sans-serif;
                      background-color: #f4f4f4;
                      color: #333;
                      margin: 0;
                      padding: 20px;
                    }

                    .portfolio-title {
                      color: #007bff;
                      text-align: center;
                    }

                    .project-name {
                      color: #4caf50;
                    }

                    .project-link {
                      color: #007bff;
                    }
                  </style>
                </head>
                <body>
                  <h1 class="portfolio-title">${this.name}</h1>
                  <h2 class="project-name">${this.workProjectName}</h2>
                  <p class="project-link">${this.workProjectLink}</p>
                  <!-- Add more content based on user input -->
                </body>
              </html>`;
    },
  },
};
</script>


<style scoped>
.portfolio-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
