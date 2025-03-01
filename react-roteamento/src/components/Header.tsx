import { Link } from "react-router-dom";

export default function Header(){

    return(
        <>
            <header>
                <h1>Header</h1>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/products">Products</Link>
                </div>
                <hr />
            </header>
        </>
    )
}


