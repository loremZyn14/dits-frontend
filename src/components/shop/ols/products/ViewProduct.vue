<template>
    <div class="container mt-5 pt-5">
        <router-link to="/shop"> <i class="fas fa-chevron-left"></i> All Products </router-link><hr>
        <h3> {{ product.name}}</h3>
        

        <div class="row">
            <div class="col-md-6">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-md-6">
                <div class="card">
                   
                    <div class="card-body">
                        <h3><strong>Price :</strong>  <span>&#x20b1; {{ product.price}}.00</span> </h3>
                        <label for="quantity">Quantity</label>
                        <number-input  :min=1 :max="product.stocks"  v-model="product.qty" center controls></number-input>
                        <h4 v-show="product.qty > 1">Sub-total &#x20b1; {{ getSubTotal}}</h4>
                    </div>
                    
                    <div class="card-footer">
                        <button class="btn btn-warning " @click="addToCart()">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NumberInput  from '@chenfengyuan/vue-number-input';
export default {
    components :{
        NumberInput
    },
    data() {
        return {
            product :{},
            
        }
    },
    mounted(){
        this.$axios.get(this.$SERVER + '/products/'+this.$route.params.id )
                   .then((response)=>{
                       this.product = response.data;
                       this.product = {... this.product, ...{qty:1}}
                   }).catch(err => alert(err))
    },
    methods: {
        addToCart(){
            this.$router.push({ name : 'cart'})
            this.$store.state.cartTotalItems +=  this.product.qty
            this.product = {... this.product, ...{subTotal:this.getSubTotal}}
            this.$store.state.cart.push(this.product)
            // this.$axios.post(this.$SERVER + '/cart/products/'+this.product.id ,{
            //     qty : this.product.qty,
            //     total : this.getSubTotal
            // }).then(response => alert(response.data))
            //   .catch(err => alert(err))     
        },

        
      
    },
    computed: {
        getSubTotal(){
            return parseInt(this.product.price)  * parseInt(this.product.qty) ;
        }
    },

    
   
}
</script>