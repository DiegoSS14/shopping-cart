import { createContext, type ReactNode, useState } from 'react'
import { type ProductsProps } from '../pages/home';

interface ContextData {
    cart: CartProps[];
    amount: number;
    addItemCart: (newItem: ProductsProps) => void
}

interface CartProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as ContextData)

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])

    function addItemCart(newItem: ProductsProps) {
        const convertItem: CartProps = {
            id: newItem.id,
            title: newItem.title,
            description: newItem.description,
            price: newItem.price,
            cover: newItem.cover,
            amount: 0,
            total: 0,
        }
        const IndexItemCart = cart.findIndex(item => item.id === convertItem.id)

        if (IndexItemCart !== -1) {
            let cartList = cart

            cartList[IndexItemCart].amount = cartList[IndexItemCart].amount + 1;
            cartList[IndexItemCart].total = cartList[IndexItemCart].total * cartList[IndexItemCart].amount;

            setCart(cartList)
            return
        }

        let data = {
            ...convertItem,
            amount: 1,
            total: convertItem.price
        }

        setCart(products => [...products, data])
    }

    return (
        <CartContext.Provider value={{
            cart,
            amount: cart.length,
            addItemCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;