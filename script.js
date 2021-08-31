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
 methods:{
  submit(){
   alert('submit...');
  }
 }
}

const app = Vue.createApp(FlashCardApp).mount('#app');