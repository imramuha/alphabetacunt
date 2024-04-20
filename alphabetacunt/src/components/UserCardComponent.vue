<template>
  <div :class="`user-card ${position}`">
    <img :src="user.image" :alt="user.name" class="user-image">
    <div class="user-info">
      <h3>{{ user.name }}</h3>
      <p>{{ user.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCardComponent',
  props: {
    user: {
      type: Object,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.user-card {
  position: absolute;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: flex; /* Ensure child elements are displayed in a row */
  align-items: center; /* Align items vertically */
}

.bottom-left { bottom: 20px; left: 20px; }
.bottom-right { bottom: 20px; right: 20px; }
.top-left { top: 20px; left: 20px; }
.top-right { top: 20px; right: 20px; }

.user-image {
  width: 50px; /* Adjust image width as needed */
  height: 50px; /* Adjust image height as needed */
  border-radius: 50%; /* Make the image round */
  margin-right: 10px; /* Add spacing between image and text */
}

.user-info h3 {
  margin: 0;
  color: #333;
}

.user-info p {
  margin: 0;
  color: #666;
}
</style>
