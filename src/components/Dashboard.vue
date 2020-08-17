<template>
<div>
  <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row class="d-flex align-items-center">
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 animated fadeInLeft">
              <h2 class="h2-responsive font-weight-bold mt-sm-5 ">Be confident in every purchase. </h2>
              <hr class="hr-light"/>
              <h6 class="mb-4 text-justify">We, at <b class="font-weight-bold text-dark">Danrish IT Solution</b> , aim to deliver IT excellence at its finest; may it be Hardware, Software and Network services. Quality assurance is our focus, Customer satisfaction is out priority, Employment opportunity is our goal.</h6>
              <mdb-btn color="white">Get Started</mdb-btn>
              <mdb-btn outline="white" ><router-link to="/shop" class="text-white">Shop</router-link></mdb-btn>
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5 animated fadeInRight" data-wow-delay="{speed:0.3}">
              <img src="./../../public/logo.png" class="img-fluid rounded-circle ml-md-5 w-md-50"/>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
    <mdb-container class="my-5">
      <h1>Features</h1>
      <hr>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              Azus Zen-Book
            </div>
            <div class="card-body p-0">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="" class="img-fluid">
  
              <div class="container">
                <h4>Price :&#x20B1; 18,000.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol,mdbView, mdbMask, mdbBtn  } from 'mdbvue';
export default {
  
  name: 'Dashboard',
  props: {
    msg: String
  },
  components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbView,
      mdbMask,
      mdbBtn,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
