import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const  Basket = () => {
    const dispatch = useDispatch()
    const basketProducts = useSelector(state => state)
    const [active,setActive] = useState(false)

    const ters = () =>{
        setActive(!active)
    }

    const totalPrice = basketProducts.reduce(
        (total, item) => (total += item.price),
        0
    )

    const handleRemoveBasket = (data) =>{
        dispatch(data)
        toast('Başarılı bir şekilde silindi.',{duration:1000, icon: '❌',});
    }
  return (
    <>
        <div className='mr-4 fixed top-9 right-4 z-10'>
            <div className="flex-col" >
                    {active ? <ion-icon name="close-outline" onClick={() => ters()} /> : <ion-icon name="basket-outline" onClick={() => ters()} />}
            </div>
            <div className={active ? "block" : "hidden"}>

                <div className="absolute top-32 right-8 basket z-10 p-4 bg-yellow-200 rounded-xl">
                <p className="flex items-center justify-center bg-black text-l p-2 text-white">YOUR BASKET</p>
                {basketProducts && basketProducts.map((data,length,index)=>(
                    <div key={data.id} className="p-4 m-6 bg-white rounded shadow-md top-32 right-12">
                        <div>
                            <ion-icon onClick={()=> handleRemoveBasket({type: "REMOVE", payload: data})} name="close-outline"></ion-icon>
                        </div>
                        <div>
                            <img src={data.imageUrl} alt="resim" className="basket-image" />
                        </div>
                        <div>
                            <p>{data.body}</p>
                            <p>{data.price} Tl</p>
                        </div>
                    </div>
                    ))}
                {basketProducts.length > 0 ? <div className="flex items-center justify-center">Toplam sepet tutarınız: {totalPrice} Tl</div> : <div>Sepetiniz boş</div>}
                </div>
            </div>
        </div>
        <Toaster />
    </>

  )
}

export default Basket