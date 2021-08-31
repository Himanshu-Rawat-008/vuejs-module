const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   cards,
   flipped: false
  }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');