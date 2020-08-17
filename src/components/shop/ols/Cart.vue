<template>
    <div class="container mt-5 pt-5">
        <router-link to="/shop"><i class="fas fa-chevron-left"></i> Continue Shopping</router-link>
        <h2>Cart</h2>
        <hr>
        <div>
            <table class="table ">
            <thead>
                <tr>
                    <th>Product(s)</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in cart" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td v-text="product.price"></td>
                    <!-- <td> <input type="number" v-model="product.qty" @focus="getOldValue" @change="addOrMinusCartItems" class="form-control" ></td> -->
                    <td><number-input @change="addOrMinusCartItems" :min=1 :max="product.stocks"  v-model="product.qty" center controls></number-input></td>
                    <td> &#x20B1;  {{ computeSubTotal(product) }}.00</td>
                    <td> <button @click="remove(product)"><i class="fas fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="container text-right">
            <button class="btn btn-warning btn-rounded">Checkout</button>
        </div>
    </div>
</template>
<script>
import NumberInput  from '@chenfengyuan/vue-number-input';
export default {

    components :{
        NumberInput
    },
    mounted(){
    },
    methods: {
        remove(product){
            let ndx = this.cart.findIndex(el => el.id == product.id);
            this.cart.splice(ndx,1)
            this.$store.state.cartTotalItems -= product.qty
           
        },
        addOrMinusCartItems(newQty,oldQty){
            
            if(isNaN(oldQty)){
                oldQty = 0
            }else{
                if(newQty > oldQty){
                    this.$store.state.cartTotalItems += newQty - oldQty
                }else{
                    this.$store.state.cartTotalItems -=  oldQty - newQty
                }
            }
        },

        computeSubTotal(product){
            product.subTotal = product.qty * product.price;
            return product.subTotal;
        }
    },
    computed : {
        cart(){
            return this.$store.state.cart;
        }
    },
    
}
</script>

