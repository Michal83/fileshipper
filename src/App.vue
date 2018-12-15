<template>
  <div id="app">
    <picker v-on:add-files="addFiles" v-bind:lock="lock" />
    <files-list v-bind:files="files" v-bind:lock="lock" />
    <button class="btn-upload" v-show="files.length > 0" :class="{locked: lock}" @click="uploadFiles" :disabled="lock">Upload</button>
  </div>
</template>

<script>
import * as filestack from 'filestack-js';
import config from './config/config.js';
import Picker from './components/Picker.vue';
import FilesList from './components/FilesList';

const filestackClient = filestack.init(config.API_KEY);

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
        file.percentUploaded = 0;
        file.bytesUploaded = 0;
        this.files.push(file);
      }
    },
    uploadFiles() {
      this.lock = true;
      this.files.forEach(file => {
        this.uploadSingleFile(file);
      });
    },
    uploadSingleFile(file) {
      filestackClient.upload(file, { onProgress: this.onProgress(file) }, {}, {})
          .then(res => {
            file.handle = res.handle;
            this.refreshFiles();
          })
          .catch(err => {
            file.error = err;
            this.refreshFiles();
          });
    },
    onProgress(file) {
      return event => {
        file.percentUploaded = event.totalPercent;
        file.bytesUploaded = event.totalBytes;
        this.refreshFiles();
      }
    },
    refreshFiles() {
      this.files.splice();
    }
  }
}
</script>

<style>
* {
  font-family: 'Lato', sans-serif;
  box-sizing: border-box
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 4rem;
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
