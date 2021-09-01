const FlashCardApp = {
 data() {

  // CARD MANAGER
//   return {
//    cards,
//    editIndex: -1,
//    fontSize: 15,
//    textSizeControlStyle: {
//        textAlign: 'center',
//        cursor: 'pointer'
//    }
// }
  return {
   deckName: "VueJs FundaMentals",
   cards,
   index:0,
   flipped: false,
   readMoreUrl: 'https://v3.vuejs.org/guide',
   userInput: 'default',
   }
 },
 methods:{
  move(change){
   if(this.cards[this.index+change]){
    this.index+=change;
   }else{
       this.index = change ==1 ?0:this.cards.length-1;
   }
   this.flipped=false;
  },

  gotIt(){
      if(this.cards.length === 1)
        return alert('well done');

      this.cards.splice(this.index, 1);
      if(!this.cards[this.index]){
          this.index=0;
      }
      this.flipped=false;
  },

  again(){
      this.cards[this.index].isRepeat = true;
      this.move(1);
  }
 },
 computed: {
  front(){
   return this.cards[this.index].front;
  },
  back(){
   return this.cards[this.index].back;
  },
  isRepeat(){
      return this.cards[this.index].isRepeat;
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
}
}

const app = Vue.createApp(FlashCardApp).mount('#app');