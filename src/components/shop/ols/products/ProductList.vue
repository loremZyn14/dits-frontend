<template>
    <div id="shop" class="container pt-5 pb-3">
        <h3 class="mt-5 pt-5" v-text="selectedCategory.name.toUpperCase() "></h3>
        <hr>
        <div class="row">
            <div class="col-md-4">
                
                <Categories @category:type="getCategory"/>
            </div>
            <div class="col-md-8">
                <Products :categoryId="selectedCategory.id" />
            </div>
        </div> 
    </div>
</template>
<script>
import Categories from './../../Categories';
import Products from './Products';
export default {
    
    components :{
        Categories,
        Products
    },
    data() {
        return {
            selectedCategory : { id: 0 , name : 'All Products'},
        }
    },

    methods: {
        getCategory(category){
            this.selectedCategory = category
            const path = '/shop/products/categories/'+ category.name;
            if( this.$router.currentRoute.path != path){
                this.$router.push(path);
            }
        }
    },
    
}
</script>