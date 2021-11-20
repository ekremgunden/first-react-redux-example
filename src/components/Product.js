import React from 'react'
import {useDispatch} from 'react-redux';
import {addBasket} from '../stores/basket/basketSlice'
import toast, { Toaster } from 'react-hot-toast'; 

const Product = ({datas}) => {
    const dispatch = useDispatch()

    const handleBasket = (data) =>{
        dispatch(addBasket(data))
        toast('Başarılı bir şekilde sepete eklendi.',{duration:1000, icon: '✅',});
    }

    return (
        <div className=" pt-8 flex flex-wrap product">
            {datas.map((data)=>(
                    <div key={data.id} className="p-4 m-6 bg-white rounded shadow-md">
                        <div>
                            <img src={data.imageUrl} alt="resim" className="max-h-60" />
                        </div>
                        <div>
                            <p>{data.body}</p>
                            <p>{data.price} Tl</p>
                        </div>
                        <div>
                            <input className="max-w-16" min="1" type="number" />
                            <button className="bg-blue-500 p-1 rounded-md" onClick={() => handleBasket(data)}>Sepete Ekle</button>
                        </div>
                    </div>
                ))}
                <Toaster />
        </div>
    )
}

export default Product;
