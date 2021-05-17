<template>
  <div>
    <button
      type="text"
      id="input-component"
      class="color default-style"
    ></button>
  </div>
</template>

<script>
export default {
  name: "mxpInput",
  props: {
    msg: String,
    color: String,
    light: Boolean,
  },

  mounted() {
    let btn = document.getElementById("input-component");
    btn.style.backgroundColor = this.color ? this.color : "";
    btn.style.color = this.light ? "white" : "black";
  },
};
</script>

<style scoped>
.color {
  background: color;
}

.default-style {
  margin: 1rem;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid black;
  box-shadow: 0 1px 10px 1.5px grey;
  cursor: pointer;
}
</style>
