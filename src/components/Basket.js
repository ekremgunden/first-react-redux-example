import React,{useState} from 'react'
import { useSelector } from 'react-redux'

export default function Basket() {
    const basketProducts = useSelector(state => state.basket.cart)
    const [active,setActive] = useState(false)

    console.log(basketProducts)

    const ters = () =>{
        setActive(!active)
    }

    const totalPrice = basketProducts.reduce(
        (total, item) => (total += item.price),
        0
    )

    return (
        <div>
            <div className="absolute top-2 right-2 flex flex-col" >
                {active ? <ion-icon name="close-outline" onClick={() => ters()} /> : <ion-icon name="basket-outline" onClick={() => ters()} />}            
            </div>
            <div className={active ? "block" : "hidden"}>
            <p className="absolute top-16 right-12">YOUR BASKET</p>
            <div className="absolute top-32 right-8 basket">
            {basketProducts.map((data,length)=>(
                    <div key={data.length} className="p-4 m-6 bg-white rounded shadow-md top-32 right-12">
                        <div>
                            <img src={data.imageUrl} alt="resim" className="max-h-60" />
                        </div>
                        <div>
                            <p>{data.body}</p>
                            <p>{data.price} Tl</p>
                        </div>
                    </div>
                ))}
                <div className="flex items-center justify-center">Toplam sepet tutarınız: {totalPrice} Tl</div>
            </div>
            </div>
        </div>
    )
}
