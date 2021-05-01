import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../../styles/ItemDetailContainer/itemDetailContainer.css'
import Spinner from '../Spinner/Spinner';

export default function ItemDetailContainer(){
    const [items, setItems] = useState([]);

    const {id} = useParams();


    useEffect(() => {
      
    
      const   getItems = new Promise((res,rej)=>{
        const productos=[
          {
            "precio": 500,
            "id": 'goshop1lan',
            "title": "Café",
            "category":"hogar",
            "stock":6,
            "url": "https://picsum.photos/id/0/200",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
          },
          {
            "precio": 300,
            "id": 'goshop2lan',
            "title": "Pizza",
            "category":"hogar",
            "stock":4,
            "url": "https://picsum.photos/id/10/200",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
          },
          {
            "precio": 100,
            "id": 'goshop3lan',
            "title": "Agua",
            "category":"hogar",
            "stock":4,
            "url": "https://picsum.photos/id/20/200",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
          },
          {
            "precio": 50,
            "id": 'goshop4lan',
            "title": "Sandía",
            "category":"hogar",
            "stock":8,
            "url": "https://picsum.photos/id/30/200",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
          },
          {
            "precio": 10,
            "id": 'goshop5lan',
            "title": "Mango",
            "category":"hogar",
            "stock":10,
            "url": "https://picsum.photos/id/40/200",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
          },
          {
            "precio": 150,
            "id": 'goshop6lan',
            "title": "Chela",
            "category":"hogar",
            "stock":20,
            "url": "https://picsum.photos/id/50/200",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
          },
          {
              "precio": 500,
              "id": 'goshop7lan',
              "title": "Malta",
              "category":"hogar",
              "stock":5,
              "url": "htps://picsum.photos/id/50/200",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
            },
            {
                "precio": 500,
                "id": 'goshop8lan',
                "title": "Malta",
                "category":"hogar",
                "stock":10,
                "url": "https://picsum.photos/id/50/200",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus eleifend tortor ac lacinia. Phasellus ullamcorper pulvinar nibh. Nunc at pretium nisl. Praesent auctor mattis augue vitae sodales. Integer eget euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum, felis nec convallis iaculis, orci neque pellentesque risus, vitae condimentum tortor odio sed ex. Phasellus vitae orci convallis, suscipit est non, suscipit turpis. Sed sit amet purus fringilla, hendrerit tortor id, pulvinar enim. Maecenas suscipit nulla dolor, ut mattis dolor varius eget. Praesent vel facilisis nisi. Sed vitae ipsum sed nisi iaculis gravida sed et nisl. Pellentesque felis nisl, dignissim vel lacinia ac, bibendum at nisi. Nulla facilisi. Aenean gravida vitae tellus finibus gravida."
              }
        ]
        setTimeout(()=>{
     
            res(productos.filter(e=>e.id=== id))

        },2000)
      })
    
      getItems.then((res)=>{
          
    setItems(res)
      })
      .catch(()=>{
        console.log("ocurrio un error")
      })
      .finally(()=>{
        console.log("Proceso Finalizado")
      })
    
      
    }, [id]);
//console.log(items)
    

    return(<>
     
    {  items.length===0 ?<div  className="contain-spinner"><Spinner /></div> :  <ItemDetail product={items}/>     }

    </>)
}