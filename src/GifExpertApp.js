import React ,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([ 'Naruto'])
    
    /*/para agregar algo a las categorias
    const handleAdd = ()=>{
        //setCategories( [...categories, 'Dead Note'] );
        setCategories( cats =>[...cats, 'Dead NOTE'] );

    }*/

    return (
        <>
          <h2>GifExpertApp</h2> 
          <AddCategory setCategories={setCategories} ></AddCategory>
          <hr></hr>          
          <ol>
              {
                  categories.map( (category)=>{
                      return <GifGrid 
                      category={category}
                      key={category}
                      />

                  })
              }
          </ol>
        </>
    )
}

