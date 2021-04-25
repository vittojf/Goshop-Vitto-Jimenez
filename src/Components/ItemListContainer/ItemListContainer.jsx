import React,{useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import '../../styles/itemListContainer/itemListContainer.css'
import Spinner from '../Spinner/Spinner';


export default function ItemListContainer({greeting}){
  const [items, setItems] = useState([]);

  useEffect(() => {
    
  
    const call = new Promise((res,rej)=>{
      const productos=[
        {
          "precio": 500,
          "id": 'goshop1lan',
          "title": "Café",
          "category":"hogar",
          "stock":6,
          "url": "https://picsum.photos/id/0/200"
        },
        {
          "precio": 300,
          "id": 'goshop2lan',
          "title": "Pizza",
          "category":"hogar",
          "stock":4,
    
          "url": "https://picsum.photos/id/10/200"
        },
        {
          "precio": 100,
          "id": 'goshop3lan',
          "title": "Agua",
          "category":"hogar",
          "stock":4,
    
          "url": "https://picsum.photos/id/20/200"
        },
        {
          "precio": 50,
          "id": 'goshop4lan',
          "title": "Sandía",
          "category":"hogar",
          "stock":8,
    
          "url": "https://picsum.photos/id/30/200"
        },
        {
          "precio": 10,
          "id": 'goshop5lan',
          "title": "Mango",
          "category":"hogar",
          "stock":10,
    
          "url": "https://picsum.photos/id/40/200"
        },
        {
          "precio": 150,
          "id": 'goshop6lan',
          "title": "Chela",
          "category":"hogar",
          "stock":20,
    
          "url": "https://picsum.photos/id/50/200"
        },
        {
            "precio": 500,
            "id": 'goshop7lan',
            "title": "Malta",
            "category":"hogar",
            "stock":5,
    
            "url": "https://picsum.photos/id/50/200"
          },
          {
              "precio": 500,
              "id": 'goshop8lan',
              "title": "Malta",
              "category":"hogar",
              "stock":10,
    
              "url": "https://picsum.photos/id/50/200"
            }
      ]
      setTimeout(()=>{
   
          res(productos)
      },3000)
    })
  
    call.then((res)=>{
  setItems(res)
    })
    .catch(()=>{
      console.log("ocurrio un error")
    })
    .finally(()=>{
      console.log("Proceso Finalizado")
    })
  
    
  }, []);

    return(
    <section className="container" >
{  items.length===0 ? <Spinner/> :          <ItemList product={items} />    }
 
    </section>) 
}