<template>
  <div id="app">
    <picker v-on:add-files="addFiles" />
    <files-list v-bind:files="files" v-bind:lock="lock" />
    <button class="btn-upload" v-show="files.length > 0" :class="{locked: lock}" @click="uploadFiles" :disabled="lock">Upload</button>
  </div>
</template>

<script>
import * as filestack from 'filestack-js';
import Picker from './components/Picker.vue';
import FilesList from './components/FilesList';

const API_KEY = 'AW48Nu8ITveYojVEGHFrgz';
const filestackClient = filestack.init(API_KEY);

export default {
  name: 'app',
  components: {
    Picker,
    FilesList
  },
  data() {
    return {
      files: [],
      lock: false
    }
  },
  methods: {
    addFiles(newFiles) {
      for (let file of newFiles) {
        file.handle = null;
        file.error = null;
        this.files.push(file);
      };
    },
    uploadFiles() {
      this.lock = true;
      this.files.forEach(file => {
        this.uploadSingleFile(file);
      });
    },
    uploadSingleFile(file) {
      filestackClient.upload(file, { onProgress: this.onProgress }, {}, {})
          .then(res => {
            file.handle = res.handle;
            //HACK FOR REFRESH
            this.files.splice();
          })
          .catch(err => {
            file.error = err;
            //HACK FOR REFRESH
            this.files.splice();
          });
    },
    onProgress(event) {
      console.log(event);
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
  border: none;
}

.btn-upload:hover {
  cursor: pointer;
  background-color: #0ad1d1;
}

.locked {
  background-color: #9d9c9c;
}

.locked:hover {
  cursor: default;
  background-color: #9d9c9c;
}
</style>
