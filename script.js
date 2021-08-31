const FlashCardApp = {
 data() {
  return {
   deckName: "VueJs FundaMentals",
   cards,
   editIndex:-1,
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
 },
 computed: {
  front(){
   return this.cards[this.index].front;
  },
  back(){
   return this.cards[this.index].back;
  }
 }
}
 //  return {
 //   deckName: "VueJs FundaMentals",
 //   deckDescription: '',
 //   reverse: false,
 //   options:[],
 //   leech:'tag',
 //   categoryId:""
 //   }
 // },
 // computed:{
 //  // charsLeft(){
 //  //  return 200 - this.deckDescription.length;
 //  // }
 // },
 // methods:{
 //  submit(){
 //   alert('submit...');
 //  },
 //  charsLeft(){
 //   return 200 - this.deckDescription.length;
 //  }
//  }
// }

const app = Vue.createApp(FlashCardApp).mount('#app');