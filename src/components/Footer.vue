<template>
  <div id="Footer">
    <p>this is Footer page<button type="button" v-on:click="counter1++">{{ counter1 }}</button></p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      counter1: 0,
    }
  }
};
</script>

<style scoped>
</style>