<template>
  <div>
    <button id="btn-component" class="color bg-red-300 default-style">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    color: String,
    light: Boolean,
  },

  mounted() {
    let btn = document.getElementById("btn-component");
    btn.style.color = this.light ? "white" : "black";
  },
};
</script>

<style scoped>
.default-style {
  margin: 1rem;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  box-shadow: 0 1px 10px 1.5px grey;
  cursor: pointer;
}
</style>
