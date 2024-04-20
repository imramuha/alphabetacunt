<template>
  <div class="board">
    <roulette-component />
    <arena-component />
    <chat-component />
    <jukebox-component />
    <user-card-component v-for="(user, index) in users" :key="index"
                         :user="user" :position="positions[index]" />
    <for-sale-component :items="itemsForSale" />
    <man-component />
  </div>
</template>

<script>
import RouletteComponent from './RouletteComponent.vue'
import ArenaComponent from './ArenaComponent.vue'
import ChatComponent from './ChatComponent.vue'
import JukeboxComponent from './JukeboxComponent.vue'
import UserCardComponent from './UserCardComponent.vue'
import ForSaleComponent from './ForSaleComponent.vue'
import ManComponent from './ManComponent.vue'

export default {
  name: 'BoardComponent',
  components: {
    RouletteComponent,
    ArenaComponent,
    ChatComponent,
    JukeboxComponent,
    UserCardComponent,
    ForSaleComponent,
    ManComponent
  },
  data() {
    return {
      users: [
        { 
          name: 'User1', 
          description: 'Description 1', 
          image: require("../assets/img/user1.jpg") // Adjust the path as needed
        },
        { 
          name: 'User2', 
          description: 'Description 2', 
          image: require("../assets/img/user2.jpg") // Adjust the path as needed
        },
        { 
          name: 'User3', 
          description: 'Description 3', 
          image: require("../assets/img/user3.webp") // Adjust the path as needed
        },
        { 
          name: 'User4', 
          description: 'Description 4', 
          image: require("../assets/img/user4.jpg") // Adjust the path as needed
        }
      ],
      positions: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
      itemsForSale: [
        { name: "Person 1", image: require("../assets/img/img1.jpeg"), price: "$100" },
        { name: "Person 2", image: require("../assets/img/img2.jpg"), price: "$200" },
        { name: "Person 3", image: require("../assets/img/img3.jpg"), price: "$300" },
        { name: "Person 4", image: require("../assets/img/img4.jpg"), price: "$400" },
        { name: "Person 5", image: require("../assets/img/img5.jpg"), price: "$500" },
      ]
    }
  }
}

</script>
