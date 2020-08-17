<template>
    <div class="row">
        <div class="col-md-12" v-if="products.length == 0">
            <h3>New Products are comning soon</h3>
        </div>
        <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
            <product-component  :product="product" ></product-component>
        </div>
    </div>
</template>
<script>
import ProductComponent from './Product';
export default {
    components :{
        ProductComponent
    },

    props : {
        categoryId : {
            type : Number,
            default(){
                return 0
            }
        }
    },
    data() {
        return {
           data : [],
            products : []
        }
    },
    mounted(){
        //this.products = this.data
        this.$axios.get(this.$SERVER + '/products')
                   .then(response => {
                       this.data = response.data;
                       this.products = this.data;
                   })
                   .catch(err => alert(err));
    },
    methods :{
        filterProducts(){
            return this.data.filter((product)=>{
                return product.category_id == this.categoryId
            });  
        },
        showProducts(){
            if(this.categoryId == 0){
                this.products = this.data
            }else{
                this.products = this.filterProducts()
            }
        }
    },
    watch : {
         categoryId : {
             handler : function(){
                this.showProducts()
                console.log(this.categoryId)
            }
         }
    }
}
</script>

