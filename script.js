const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   cards,
   flipped: false,
   readMoreUrl: 'https://v3.vuejs.org/guide',
   userInput: 'default'
  }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');