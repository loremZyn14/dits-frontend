<template>
  <div id="app">
  <mdb-navbar  class="dark" position="top" dark href="#"  scrolling>
 <mdb-container>
      <mdb-navbar-brand href="https://mdbootstrap.com/">
      Danrish IT Solution
    </mdb-navbar-brand>
    <mdb-container>
    <mdb-navbar-toggler style="max-width: 1140px">
     
      <mdb-navbar-nav right >
        <div class="container-fluid " v-if="search">
          <mdb-form-inline class="md-form m-0  " >
            <span @click="searchProduct(searchKey)"><i class="fas fa-search text-white"></i></span>
            <mdb-input type="text" placeholder="Search" aria-label="Search" v-model="searchKey" />
            <span @click="search=false"><i class="fas fa-times text-white"></i></span>
        </mdb-form-inline>
        </div>
        <div class="container-fluid" v-if="!search">
          <router-link to="/" class="nav-link nabvar-link">Home</router-link>
          <router-link to="/shop" class="nav-link nabvar-link">Shop</router-link>
          <mdb-nav-item > | </mdb-nav-item>
          <mdb-nav-item href="#search" @click="search=true"><i class="fas fa-search"></i></mdb-nav-item>
          <router-link to="/shop/ols/cart" class="nav-link nabvar-link"><i class="fas fa-shopping-cart"></i> <span v-show="totalCartItems > 0">({{ totalCartItems}})</span></router-link>
          
          <mdb-dropdown tag="li" class="nav-item" end>
            <mdb-dropdown-toggle tag="a" navLink  slot="toggle" waves-fixed><i class="far fa-user"></i></mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item><router-link :to="{name : 'login'}">Sign In</router-link></mdb-dropdown-item>
              <mdb-dropdown-item><router-link :to="{name : 'register'}">Create Account</router-link></mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </div>
      </mdb-navbar-nav> 
     
    </mdb-navbar-toggler>
    </mdb-container>
    </mdb-container>
  </mdb-navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav,
         mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle,
         mdbDropdownItem, mdbFormInline, mdbInput,mdbContainer } from 'mdbvue';
export default {
  name: 'App',
  components: {
    mdbNavbar,mdbNavbarBrand,mdbNavbarToggler,
    mdbNavbarNav,mdbNavItem,mdbDropdown,mdbDropdownMenu,
    mdbDropdownToggle,mdbDropdownItem,mdbFormInline,
    mdbInput,mdbContainer,
    
  },
  data() {
    return {
      search : false,
      searchKey : ''
    }
  },
  methods: {
    searchProduct(searchKey){
      alert(searchKey)
    }
  },
  computed : {
    totalCartItems(){
      return this.$store.state.cartTotalItems;
    }
  }
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  .navbar .md-form {
    margin: 0;
  }
  .top-nav-collapse {
    background-color: rgba(44, 42, 42, 0.7) !important;
  }
  @media (max-width: 990px){
    .navbar {
      background-color:  rgba(44, 42, 42, 0.7) !important;
    }
   .view{
     height: 1000px !important;
   }
  }
  .dark {
    background-color: rgba(44, 42, 42, 0.7) !important;
  }
  .view {
    background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh - 60px);
  }
  .gradient {
    background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
    background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  }
  h6 {
    line-height: 1.7;
  }
  .router-link-exact-active{
    font-weight: 700;
    color: whitesmoke;
    font-style:inherit;
  }
 
</style>
