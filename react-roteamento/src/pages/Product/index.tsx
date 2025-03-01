import { useParams } from "react-router-dom"


const products = [
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





export default function Product(){

    const {productId} = useParams()

    const product = products.find(product => product.id === Number(productId))

    if(!product){
        return <h1> Produto não encontrado</h1>
    }

    return(
        <>
            <h1>Nome do Produto: {product.name}</h1>
            <p>Preço do Produto: R${product.price},00</p>
        </>
    )
}