import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Home from "../views/Home.vue";
import Loker from "../views/Loker.vue"
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Brands from "../views/Brands.vue";
import Category from "../views/Category.vue";
import Dashboard from "../views/Dashboard.vue"
import SingleProduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        
    },
    {
        path: "/loker",
        name: "Loker",
        component: Loker,
      
    },
    {
        path: '/produk/:slug',
        name: 'SingleProduk',
        component: SingleProduk
    },
    // {
    //     path: "/cart",
    //     name: "Cart",
    //     component: Cart,
        
    // },
  
    // {
    //     path: "/checkout",
    //     name: "Checkout",
    //     component: Checkout,
        
    // },
    // {
    //     path: "/contact",
    //     name: "Contact",
    //     component: Contact,
        
    // },
    // {
    //     path: "/profile",
    //     name: "Profile",
    //     beforeEnter: cekToken,
    //     component: Profile,
        
    // },
    // {
    //     path: "/brands",
    //     name: "Brands",
    //     component: Brands,
       
    // },
    {
        path: "/category",
        name: "Category",
        component: Category,
        
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
       
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
      
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }
export default router;