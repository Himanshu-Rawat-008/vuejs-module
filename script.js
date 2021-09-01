Vue.component('price',{
    data: function(){
        return{
        }
    },
    props:['value', 'prefix', 'precision', 'conversion'],
    template:`<span>{{ this.prefix + Number.parseFloat(this.value * this.conversion).toFixed(this.precision) }}</span>`,
})


var app = new Vue({
    el: '#app',
    data:{
        maximum:99,
        products: null,
        cart: [],
        sliderStatus: false
    },
    methods:{
        addItem: function(product){
            var whichProduct;
            var existing = this.cart.filter((item,index)=>{
                if(item.product.id == Number(product.id)){
                    whichProduct = index;
                    return true;
                }
                return false;
            })
            if(existing.length){
                this.cart[whichProduct].qty++;
            }
            else
                this.cart.push({product:product, qty:1})
        },
        deleteItem: function(id){
            if(this.cart[id]>1){
                this.cart[id].qty--;
            }else{
                this.cart.split(id,1);
            }
        }
    },
    computed:{
        cartTotal: function(){
            let sum=0;
            for(key in this.cart){
                sum+=(this.cart[key].product.price * this.cart[key].qty);
            }
            return sum;
        },
        cartQty: function(){
            let qty =0;
            for(key in this.cart){
                qty+=this.cart[key].qty;
            }
            return qty;
        }
    },
    filters:{
        currency : function(value){
            return '$' + Number.parseFloat(value).toFixed(2);
        }
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then(response=> response.json())
        .then(data=>{
            this.products = data;
        })
    }
});

// Vue.filters('currency', function(){

// });