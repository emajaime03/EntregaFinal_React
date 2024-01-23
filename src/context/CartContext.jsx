import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
            setTotalQuantity(tq => tq += quantity)
            setTotal(t => t += item.price * quantity)
        } else {
            Swal.fire({
                title: "Error!",
                text: "Ya agregaste este producto al carrito.",
                icon: "error"
            });
        }
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id == itemId)
    }

    const removeItem = (itemId) => {
        let p = cart.find(p => p.id == itemId)
        const cartUpdated = cart.filter(prod => prod.id != itemId)
        setCart(cartUpdated)
        setTotalQuantity(tq => tq -= p.quantity)
        setTotal(t => t -= p.price * p.quantity)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{ total, totalQuantity, cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}