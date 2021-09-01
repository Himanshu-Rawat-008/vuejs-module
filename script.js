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