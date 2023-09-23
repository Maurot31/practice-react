import { useReducer } from "react"
import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import Product from "./Product"

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const { products, cart } = state

    return (
        <>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <div className='box grid-responsive'>
                {
                    products.map(product =>  <Product key={product.id} product={product} />)
                }

            </div>

            <h3>Carrito</h3>
            <div className="box">

            </div>
            <button>Limpiar carrito</button>
        </>
    )
}

export default ShoppingCart