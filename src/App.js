import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import Basket from './components/Basket'
import Product from './components/Product'

const App = () => {
    const [data,setData] = useState(null);

    useEffect( () => {
        fetch("http://localhost:1592/products")
          .then((response) => response.json())
          .then((json) => {
            setData(json)
          });
    }, [])

    return (
        <div className="relative bg-red-100 py-8">
            {data && <Product datas={data} />}
            <Basket/>
        </div>
    )
}

export default connect()(App);