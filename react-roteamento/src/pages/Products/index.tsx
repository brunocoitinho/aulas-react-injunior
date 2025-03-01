import { Link } from "react-router-dom"
import { IProduct } from "../../Types/Product"


const products: IProduct[] = [
    {
        id: 1,
        name: 'Mouse Logitech',
        price: 150
    },
    {
        id: 2,
        name: 'Teclado Razer',
        price: 200
    },
    {
        id: 3,
        name: 'Monitor LG',
        price: 1000
    },
    {
        id: 4,
        name: 'Box Harry Potter',
        price: 100
    },
    {
        id: 5,
        name: 'Caixa de som JBL',
        price: 250
    },
    {
        id: 6,
        name: 'Fony de ouvido Sony',
        price: 300
    }
]

export default function Products(){

    return(
        <>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} : R${product.price},00 - <Link to={`/product/${product.id}`}><button>Ver Mais</button></Link>
                    </li>
                ))}
                
            </ul>
        </>
    )
}