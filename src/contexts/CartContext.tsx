import { createContext, type ReactNode, useState } from 'react'
import { type ProductsProps } from '../pages/home';

interface ContextData {
    cart: CartProps[];
    amount: number;
    addItemCart: (newItem: ProductsProps) => void;
    removeItemCart: (itemEdit: CartProps) => void;
    total: number | undefined;
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
    const [total, setTotal] = useState<number> (0)

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
        const indexItemCart = cart.findIndex(item => item.id === convertItem.id)

        if (indexItemCart !== -1) {
            let cartList = [...cart]

            cartList[indexItemCart].amount = cartList[indexItemCart].amount + 1;
            cartList[indexItemCart].total = cartList[indexItemCart].price * cartList[indexItemCart].amount;

            totalResultCart(cartList)
            setCart(cartList)
            return
        }

        let data = {
            ...convertItem,
            amount: 1,
            total: convertItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function removeItemCart(itemEdit: CartProps) {
        const indexItemCart = cart.findIndex(item => item.id === itemEdit.id)
        if(cart[indexItemCart]?.amount > 1) {
            // Remove 1 amount do item
            let cartList = [...cart]

            cartList[indexItemCart].amount = cartList[indexItemCart].amount - 1;
            cartList[indexItemCart].total = cartList[indexItemCart].total - cartList[indexItemCart].price;
            setCart(cartList)
            totalResultCart(cartList)
            return
        }
        const cartList = cart.filter(item => item.id != itemEdit.id)
        setCart(cartList)
        totalResultCart(cartList)
    }

    function totalResultCart(items: CartProps[]) {
        const myCart = items
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0)
        setTotal(result)
    }

    return (
        <CartContext.Provider value={{
            cart,
            amount: cart.length,
            addItemCart,
            removeItemCart,
            total,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;