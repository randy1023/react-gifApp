import { GifGridItem } from "./GifGridItem";
import { useFetchgifs } from "../hooks/useFetchgifs";


export const GifGrid = ({category}) => {

    const { images, isloading} = useFetchgifs( category);
 
  return (
    <>
        <h3>{category}</h3>
        {
            isloading && <h2>Cargando...</h2>
        }
     <div className="card-grid">

        {
            images.map( (image) =>(

                <GifGridItem 
                
                 key={image.id}
                 { ...image }
                 
                 />
            ) )
        }
        
     </div>
    </>
  )
}
