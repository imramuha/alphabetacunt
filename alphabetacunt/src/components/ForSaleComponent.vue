<template>
  <div class="for-sale-container">
    <div class="sale-card" v-for="(item, index) in items" :key="index" :style="calculatePosition(index)">
      <img :src="item.image" :alt="`Image of ${item.name}`" class="sale-image">
      <div class="price-tag">{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForSaleComponent',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    calculatePosition(index) {
      const numberOfItems = this.items.length;
      const spacing = 100 / (numberOfItems + 1);
      const position = spacing * (index + 1);
      return { left: `calc(${position}% - 50px)` }; // Adjusted style for centering
    }
  }
}
</script>

<style scoped>
.for-sale-container {
  position: fixed;
  top: 10px; /* Adjust as needed */
  left: 0;
  right: 0;
  margin: 0 auto; /* Center the container */
  width: fit-content; /* Set width to fit content */
  display: flex;
  justify-content: center;
}

.sale-card {
  position: relative;
  padding: 10px;
  margin: 0 5px; /* Adjust spacing between items */
  background-color: #fff; /* Example background color */
}

.sale-image {
  width: 100px; /* Example width */
  height: 100px; /* Example height */
}

.price-tag {
  position: absolute;
  top: calc(100% + 5px); /* Position below the sale card */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5); /* Example background color */
  color: #fff; /* Example text color */
  padding: 5px 10px;
}
</style>
