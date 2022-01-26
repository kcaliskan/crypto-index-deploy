<template>
  <div
    class="
      d-flex
      justify-content-center
      align-items-center
      loading-container-height
    "
  >
    <div class="spinner-border loading-icon-size" role="status">
      <span class="visually-hidden">{{ loadingMessage }}</span>
    </div>
  </div>
</template>

<script>
import { LOADING } from "../constants";

export default {
  name: "Loading",
  data() {
    return {
      loadingMessage: LOADING,
    };
  },
};
</script>

<style scoped>
.loading-container-height {
  height: 80vh;
}

.loading-icon-size {
  height: 5rem;
  width: 5rem;
}
</style>