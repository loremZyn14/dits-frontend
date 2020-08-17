<template>
    <div class="container">
        <h3>Categories</h3>
        <hr>
        <ul class="list-group-flush p-0 nav d-flex flex-column">
            <li class="list-group-item bg-transparent nav-item" @click="sendCategory({ id : 0 , name : 'all' })" >All Products</li>
            <li v-for="category in categories" :key="category.id" :disabled="!$route == '/shop'" class="list-group-item bg-transparent nav-item" @click="sendCategory(category)">{{ category.name}}</li>
        </ul>
    </div>
</template>
<script>

export default {
   data() {
       return {
           categories :[]
       }
   },
   mounted() {
       this.$axios.get(this.$SERVER + '/categories')
                  .then(response => this.categories = response.data)
                  .catch(err => alert(err))
   },
   methods :{
        sendCategory(category){
            this.$emit('category:type',category);
        }
    }
    
}
</script>

<style>
    .nav-item:hover {
        cursor: pointer;
        color: dodgerblue;
        font-weight: bold !important;
    }
</style>