import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard';


import Shop from './components/shop/Shop';

import ProductList from './components/shop/ols/products/ProductList';
import ViewProduct from './components/shop/ols/products/ViewProduct';
import Cart from './components/shop/ols/Cart';



//------ Auth Component --- //

import Register from './components/auth/Register';
import Login from './components/auth/Login';


Vue.use(VueRouter)
export default new VueRouter({
    routes :[
        { path: '/' , component : Dashboard },
        { path : '/shop', name : 'shop', component : Shop, children : [
            { path : 'ols/products/:id', name : 'product', component : ViewProduct },
            { path : 'ols/cart' , name : 'cart',component : Cart },
            { path : '/*' , component : ProductList },
        ]},
        { path : '/register' , name : 'register', component : Register},
        { path : '/login' , name : 'login', component : Login},
    ],
    mode : 'history'
})