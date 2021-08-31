const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   deckDescription: '',
   reverse: false,
   options:[],
    }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');