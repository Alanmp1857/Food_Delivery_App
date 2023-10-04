import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="m-4 p-4 text-center font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 ml-[45%] -mt-2 bg-black text-white cursor-pointer shadow-lg rounded-lg" onClick={handleClearCart} >Clear Cart</button>
                {cartItems.length === 0 && (<h1 className="p-2 ml-[33%] mt-2">Cart is empty. Add items to the cart!</h1>)}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;