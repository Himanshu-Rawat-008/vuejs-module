Vue.component('price',{
    data: function(){
        return{
        }
    },
    props:{
        value: Number, 
        prefix:{
            type: String,
            default:'$'
        }, 
        precision:{
            type: Number,
            default:2,
        }, 
        conversion:{
            type:Number,
            default:1,
        },
    },
    template:`<span>{{ this.prefix + Number.parseFloat(this.value * this.conversion).toFixed(this.precision) }}</span>`,
})

Vue.component('product-list',{
    props:['products', 'maximum'],
    template: 
        `<div>
            <div class="row d-flex mb-3 align-items-center"
                v-for="(item,index) in products"
                :key="item.id"   
                v-if="item.price<=Number(maximum)">
                <div class="col-1 m-auto">
                    <button class="btn btn-info" @click="$emit('add', item)">+</button>
                </div>
                <div class="col-4">
                    <img class="img-fluid d-block" :src="item.image" :alt="item.name">
                </div>
                <div class="col">
                    <h3 class="text-info">{{ item.name }}</h3>
                    <p class="mb-0">{{item.description}}</p>
                    <div class="h5 float-right">
                        <price 
                            :value="Number(item.price)" 
                            prefix="$" 
                            :precision="2" 
                            :conversion="Number(1)">
                        </price>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted:function(){
        console.log(this.products)
    }
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