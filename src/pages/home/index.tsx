import { useContext, useEffect, useState } from 'react'
import api from '../../services/api'

import { CardProduct } from '../../components/cardProduct'
import { CartContext } from '../../contexts/CartContext'
import toast from 'react-hot-toast'

export interface ProductsProps {
    id: string
    title: string
    description: string
    price: number
    cover: string
}

export function Home() {
    const [products, setProducts] = useState<ProductsProps[]>([])
    const { addItemCart } = useContext(CartContext)

    function handleClickCart(product: ProductsProps) {
        addItemCart(product)
        toast.success("Produto adicionado ao carrinho", {
            style: {
                backgroundColor: "#121212",
                color: "#fff"
            }
        })
    }

    useEffect(() => {
        async function getPorducts() {
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getPorducts();
    }, [])

    return (
        <div>
            <main className="w-full max-w-7xl min-h-screen flex flex-col items-center m-auto gap-3">
                <h1 className="text-zinc-900 text-2xl font-bold mt-6">Produtos em alta</h1>

                <div className='w-full gap-4 grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4'>
                    {products.map((product) => (
                        <CardProduct
                            clickEvent={() => handleClickCart(product)}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            cover={product.cover}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}