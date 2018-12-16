<template>
  <div class="files-list">
    <div class="file" v-for="(file, i) in files" :key="i" :class="{error: file.error, uploaded: file.handle}">
      <div class="file-description">
        <img class="thumbnail" :src="getImagePath(file)" alt="image thumbnail">        
        <div class="filename">{{ file.name }}</div>
      </div>
      <div class="progress-bar" v-show="lock && !file.error">
        <p class="percent">{{ file.percentUploaded }}%</p>
        <div class="bar-wrapper">
          <div class="bar" :style="{'width': file.percentUploaded + '%'}"></div>
        </div>
        <p class="curr-speed">Current speed: {{ file.bytesPerSecond / 1000 }} kB/s</p>
      </div>
      <div class="err-message" v-show="file.error">There is problem with uploading the file</div>
      <div class="btn-remove" v-show="!lock && !file.error" @click="$delete(files, i)">&times;</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['files', 'lock'],
  methods: {
    getImagePath(file) {
      return URL.createObjectURL(file);
    }
  }
}
</script>

<style scoped>
.file {
  border: .1rem solid rgba(139, 212, 248, .2);
  border-radius: .4rem;
  width: 70%;
  margin: 1rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.file-description,
.progress-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar-wrapper {
  width: 5rem;
  height: .5rem;
  border: .1rem solid #a0a0a0;
}

.bar {
  width: 0;
  height: .3rem;
  background-color: #008000;
  transition: width .1s ease-in-out;
}

.percent {
  margin: .3rem 0;
}

.curr-speed {
  color: #a0a0a0;
  font-size: .9rem;
  margin: .3rem 0;
}

.thumbnail {
  height: 3rem;
  margin-right: 1rem;
}

.filename {
  padding-top: .6rem;
}

.btn-remove {
  color: #6a6a6a;
  font-size: 1.5rem;
}

.btn-remove:hover {
  color: #f81414;
  cursor: pointer;
}

.uploaded {
  background: none;
  background-color: rgba(33, 235, 15, .2);
}

.error {
  background: none;
  background-color: rgba(255, 0, 0, .2);
}
</style>


