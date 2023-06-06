import {  useState} from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Piece']);

   const onAddCategory = (newValue)=>{

    if (categories.includes(newValue)) return;
    //console.log(newValue);
      setCategories([newValue,...categories]);
      //setCategories(cat=>[...categories, 'Dragon ball']);
   };


  return (
     <>
       {/** titulo */}
       <h1>GifExpertApp</h1>

       {/**Input */}
       <AddCategory 

       onNewValue={onAddCategory}
       //setCategories={setCategories}
       />


       {/**Listado de gif */}
         
      
        {categories.map(category =>(
            <GifGrid 
                key={category} 
                category={category}
            />
            ))
        }
            
            
      
          
     
     </>

  )
}

