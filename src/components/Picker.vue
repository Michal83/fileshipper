<template>
  <div class="picker">
    <input type="file" class="file-input" :class="{locked: lock}" name="file-input" id="file-input" multiple @change="handleFiles" :disabled="lock">
    <label for="file-input" class="btn-choose">Choose a file</label>
  </div>
</template>

<script>
export default {
  props: ['lock'],
  methods: {
    handleFiles(event) {
      this.$emit('add-files', event.target.files);
      event.target.value = "";
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

.file-input {
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.btn-choose {
  font-size: 1rem;
  color: #fff;
  background-color: #3ab6f5;
  display: inline-block;
  padding: 1rem;
}

.btn-choose:hover {
  cursor: pointer;
  background-color: #76cdf8;
}

</style>


