<template>
  <div id="app">
    <picker v-on:add-files="addFiles" />
    <files-list v-bind:files="files" />
    <div v-show="files.length > 0" class="btn-upload">Upload</div>
  </div>
</template>

<script>
// import * as filestack from 'filestack-js';
import Picker from './components/Picker.vue';
import FilesList from './components/FilesList';

// const API_KEY = 'AW48Nu8ITveYojVEGHFrgz';
// const filestackClient = filestack.init(API_KEY);

export default {
  name: 'app',
  components: {
    Picker,
    FilesList
  },
  data() {
    return {
      files: []
    }
  },
  methods: {
    addFiles(newFiles) {
      this.files.push(...newFiles);
      console.log(this.files);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-upload {
  color: #fff;
  background-color: #05c1c1;
  border-radius: .4rem;
  display: inline-block;
  margin: 1rem auto;
  padding: 2rem;
}

.btn-upload:hover {
  cursor: pointer;
  background-color: #0ad1d1;
}
</style>
