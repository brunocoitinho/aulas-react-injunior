import { useNavigate } from "react-router-dom";

export default function Cart(){

    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
    }

    return(
        <>
            <h1>Cart</h1>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <button onClick={handleClick}> Ir para Home</button>
            </ul>
        </>
    )
}