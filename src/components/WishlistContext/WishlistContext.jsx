import React, { createContext } from 'react'
import style from './WishlistContext.module.css'
import axios from 'axios'
export let WishlistContext =createContext()
export default function WishlistContextProvider(props) {
  let headers ={token:localStorage.getItem("token")}

    function 
    AddProductWishlist(id){
      return  axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` ,   {
           productId: id,
       },
       {headers,})


       .then((res)=>res)
       .catch((err)=>err)
      }
      function GetLoggedUserwishlist (){
        return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist" ,{headers,})
        .then((res)=>res)
        .catch((err)=>err)
      }
      function RemoveProductFromWishlist(id){
        return  axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` ,
         {headers,})
       
         .then((res)=>res)
         .catch((error)=>error)
       
         }
  
  
    return(
    <WishlistContext.Provider value={{AddProductWishlist,GetLoggedUserwishlist,RemoveProductFromWishlist}}>{props.children}</WishlistContext.Provider>)
  
}
