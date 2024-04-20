<template>
  <div class="rouletteMain">
    <div class="rouletteContainer">
      <div class="roulette" :class="{ spinning: spinning }">
        <div class="number" v-for="(number, index) in numbers" :key="number" :style="getNumberStyle(index)">
          {{ number }}
        </div>
        <div class="indicator"></div>
      </div>
      <div class="result" v-if="result !== null">Result: {{ result }}</div>
    </div>
    <button @click="spin" :disabled="spinning">Spin</button>
  </div>
</template>

<script>
import { ref } from 'firebase/database';
import { getDatabase } from 'firebase/database';

export default {
  name: 'RouletteComponent',
  data() {
    return {
      spinning: false,
      result: null,
      numbers: Array.from({ length: 37 }, (_, i) => i), // Numbers 0 to 36
      database: getDatabase(),
      scoreRef: ref(getDatabase(), 'score') // Reference to the 'score' node in the database
    };
  },
  methods: {
    async spin() {
      // Simulate spinning animation
      this.spinning = true;
      await this.delay(2000); // Simulate spinning for 2 seconds

      // Generate random number between 0 and 36
      const randomNumber = Math.floor(Math.random() * 37);
      this.result = randomNumber;

      // Update score in the database
      this.updateScore(randomNumber);

      // Reset spinning state after a delay
      setTimeout(() => {
        this.spinning = false;
      }, 1000);
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    getNumberStyle(index) {
      const angle = 360 / this.numbers.length * index;
      return {
        transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`
      };
    },
    updateScore(score) {
      // Push score to the database
      ref(this.scoreRef).push(score);
    }
  }
};
</script>

<style>
/* Your CSS styles */
</style>


<style>
.rouletteMain {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rouletteContainer {
  margin-bottom: 20px;
  position: relative;
}

.roulette {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
}

.number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: top center;
  transform: translateX(-50%) translateY(-100%) rotate(90deg);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 200px;
  background-color: red;
  border-radius: 3px;
  transform-origin: top center;
  transform: translateX(-50%) translateY(-100%);
  transition: transform 2s ease-in-out;
}

.spinning .indicator {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.result {
  position: absolute;
  top: 10px;
  right: 10px;
}

button {
  margin-top: 20px;
}
</style>
``
