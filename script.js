const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   deckDescription: '',
   reverse: false,
   options:[],
   leech:'tag',
   categoryId:""
   }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');