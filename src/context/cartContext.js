import React,{useState,createContext, useEffect, useContext} from 'react';



export const CartContext = createContext([]);

export const useCartContx = () =>useContext(CartContext)


export const CartProvider = ({children})=>{
   
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([]);


useEffect(()=>{

},[items])

const addItems =(quantity, item ) =>{



if(isInCart(item.id)){
    sumCount(quantity,item)

}else{
    setItems([...items,{...item, quantity}])

}
  
setCount(count + quantity    )

}





const sumCount = (quantity, item) =>{
    const copyI = [...items];
    const findItem = items.findIndex(el=>el.id === item.id)
    copyI[findItem] = {
        ...copyI[findItem],quantity: copyI[findItem].quantity + quantity
    };
    setItems(copyI)
}


const isInCart = (id) =>{


    const inCart= items.some(el=>el.id === id)

    return inCart
}

const removeItem = (itemId,quantity) =>{
    const iToBeRemove= items.filter(el=>el.id !== itemId)
    setItems(iToBeRemove)

   
    setCount(count===0? 0:  count - quantity)
   
  
}



const clear = () =>{
setCount(0)
}


const total = () =>{
     return items.reduce((a,{precio,quantity})=>(a+( precio * quantity)),0)
    
}


    return(
<CartContext.Provider value={{addItems,count,removeItem,items,total,clear}}>
    {children}
</CartContext.Provider>
    )
    
    
} 
