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
 },
 computed:{
  // charsLeft(){
  //  return 200 - this.deckDescription.length;
  // }
 },
 methods:{
  submit(){
   alert('submit...');
  },
  charsLeft(){
   return 200 - this.deckDescription.length;
  }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');