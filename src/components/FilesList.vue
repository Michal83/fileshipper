<template>
  <div class="files-list">
    <div class="file" v-for="(file, i) in files" v-bind:key="i">
      {{ file.name }}
      <span class="btn-remove" @click="$delete(files, i)">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['files']
}
</script>

<style scoped>
.file {
  border: .1rem solid rgba(139, 212, 248, .2);
  border-radius: .4rem;
  width: 70%;
  margin: 1rem auto;
  padding: 2rem;
}

.btn-remove {
  float: right; 
}

.btn-remove:hover {
  color: #f81414;
  cursor: pointer;
}
</style>


