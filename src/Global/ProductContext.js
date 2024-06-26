import React ,{createContext,useState} from "react"

import dslr from "../assets/dslr.jpg"
import headphone from "../assets/headphone.jpg"
import iphone from "../assets/iphone.jpg"
import microphone from "../assets/microphone.jpg"
import perfume from "../assets/perfume.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"

 export const ProductContext = createContext();

 const ProductContextProvider = (props) => {
    const [products] = useState([
          {id :1, name: 'Dslr', price: 300, image: dslr, status: 'hot'},
          {id :2, name: 'Head Phones', price: 30, image: headphone, status: 'new'},
          {id :3, name: 'Iphone', price: 400, image: iphone, status: 'hot'},
          {id :4, name: 'Microphone', price: 200, image: microphone, status: 'hot'},
          {id :5, name: 'Perfumes', price: 40, image: perfume, status: 'new'},
          {id :6, name: 'Rings', price: 100, image: rings, status: 'new'},
          {id :7, name: 'Shoes', price: 80, image: shoes, status: 'hot'},
          {id :8, name: 'Watch', price: 120, image: watch, status: 'new'}
    ]);
    return(
        <ProductContext.Provider value={{products: [...products]}}>
         {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;