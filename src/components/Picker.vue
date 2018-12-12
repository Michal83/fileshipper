<template>
  <div class="picker">
    <input type="file" multiple @change="handleFiles">
  </div>
</template>

<script>
export default {
  methods: {
    handleFiles(event) {
      this.$emit('add-files', event.target.files);
    }
  }
}
</script>

<style scoped>
.picker {
  border: .1rem solid rgba(139, 212, 248, .5);
  border-radius: .4rem;
  width: 70%;
  padding: 4rem 0;
  margin: 1rem auto 3rem;
}
</style>


