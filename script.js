const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   deckDescription: '',
    }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');