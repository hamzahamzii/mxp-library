<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { MxpLibrarySample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  MxpLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <mxp-library-sample />
  </div>
</template>
