const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   cards,
   index:0,
   flipped: false,
   readMoreUrl: 'https://v3.vuejs.org/guide',
   userInput: 'default'
  }
 },
 methods:{
  move(change){
   if(this.cards[this.index+change]){
    this.index+=change;
    this.flipped=false; 
   }
  }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');