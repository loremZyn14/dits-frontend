<template>
    <mdb-card >
    <mdb-card-image :src="image" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>{{ product.name}} ( {{ product.category_id }})</mdb-card-title>
      <mdb-card-text>&#x20B1; {{ product.price}}</mdb-card-text>
      <mdb-btn color="primary" size="sm" block darkWaves @click="viewProduct()"><i class="fas fa-eye"></i>View </mdb-btn>
    </mdb-card-body>
  </mdb-card>

</template>
<script>
	import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
	export default {
     
		components: {
			mdbCard,mdbCardImage,mdbCardBody,mdbCardTitle,mdbCardText,mdbBtn
        },
        props : {
            product : Object
        },
        data() {
            return {
                image : 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg' 
            }
        },
        methods :{
            viewProduct(){
                this.$router.push({ name : 'product',params  : { id : this.product.id }})
            }
        }
      
       
        
	}
</script>