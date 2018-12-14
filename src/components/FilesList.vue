<template>
  <div class="files-list">
    <div class="file" v-for="(file, i) in files" :key="i" :class="{error: file.error, uploaded: file.handle}">
      <img class="thumbnail" :src="getImagePath(file)" alt="image thumbnail">        
      <div class="name">{{ file.name }}</div>
      <div class="btn-remove" v-show="!lock" @click="$delete(files, i)">&times;</div>
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
.files-list::after {
  content: "";
  display: table;
  clear: both;
}

.file {
  border: .1rem solid rgba(139, 212, 248, .2);
  border-radius: .4rem;
  width: 70%;
  margin: 1rem auto;
  padding: 2rem;
  position: relative;
}

.thumbnail,
.name,
.btn-remove {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.thumbnail,
.name {
  float: left;
}

.thumbnail {
  height: 3rem;
  margin-right: 1rem;
}

.btn-remove {
  float: right; 
}

.btn-remove:hover {
  color: #f81414;
  cursor: pointer;
}

.uploaded {
  background-color: rgba(33, 235, 15, .2);
}

.error {
  background-color: rgba(255, 0, 0, .2);
}
</style>


