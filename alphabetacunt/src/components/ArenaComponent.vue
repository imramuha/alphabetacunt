<template>
  <div class="arena"></div>
</template>

<script>
export default {
  name: 'ArenaComponent'
}
</script>

<style scoped>
.arena {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vh; /* 75% of viewport width */
  height: 75vh; /* Same as width to maintain a circle */
  background-color: #f2f2f2; /* Light gray background */
  border-radius: 50%; /* Makes the div a circle */
  box-shadow: 0 2px 15px rgba(0,0,0,0.2); /* Subtle shadow for depth */
}
</style>
