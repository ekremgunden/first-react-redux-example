import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addBasket} from '../stores/basket/basketSlice'
import toast, { Toaster } from 'react-hot-toast'; 

const Product = ({data,categories}) => {
    const dispatch = useDispatch()
    const [active,setActive] = useState(0) // if you dont like one of them active , you can change value to null

    console.log(active)

    const handleBasket = (data) =>{
        dispatch(addBasket(data))
        toast('Başarılı bir şekilde sepete eklendi.',{duration:1000, icon: '✅',});
    }

    return (
        <div className="flex flex-col">
            <div className="pt-8 mx-4">
                <h5 className="mx-4 text-2xl font-semibold">Kategoriler</h5>
                <ul className="flex">
                {categories && categories.map((category , index)=>(
                            <li onClick={()=> setActive(index)} className={active === index ? "p-2 bg-yellow-200 shadow-lg m-2 transition duration-300 cursor-pointer" : "p-2 bg-white shadow-lg m-2 transition duration-300 cursor-pointer"} key={category.id}>{category.title}</li>
                        ))}
                </ul> 
            </div>
            
            <div className="pt-8 flex flex-wrap product">
                    {data.filter(data => data.categories === active || active === 0).map(filteredData => (
                        <div key={filteredData.id} className="p-4 m-6 bg-white rounded shadow-md">
                        <div>
                            <img src={filteredData.imageUrl} alt="resim" className="max-h-60" />
                        </div>
                        <div>
                            <p>{filteredData.body}</p>
                            <p>{filteredData.price} Tl</p>
                        </div>
                        <div>
                            <input className="max-w-16" min="1" type="number" />
                            <button className="bg-blue-500 p-1 rounded-md" onClick={() => handleBasket(filteredData)}>Sepete Ekle</button>
                        </div>
                    </div>
                    ))}
                    <Toaster />
            </div>    
        </div>
    )
}

export default Product;
