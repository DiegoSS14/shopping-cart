import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router'


export interface ProductsProps {
    id: string
    title: string
    description: string
    price: number
    cover: string
    clickEvent: () => void
}

export function CardProduct(product: ProductsProps) {

    return (
        <section
            id={product.id}
            className='w-full flex flex-col justify-between border-1 p-5 border-zinc-200 bg-white rounded-lg transform duration-200 hover:scale-101 hover:drop-shadow-xl cursor-pointer'
        >
            <Link to={`/products/${product.id}`}>
                <img
                    className="w-full max-h-70 object-cover rounded-lg mb-2"
                    src={product.cover}
                    alt={product.title}
                />

                <strong className='font-bold text-lg'>
                    {product.title}
                </strong>
            </Link>

            <div className='flex gap-3 items-center justify-between mt-4'>
                <strong className='text-xl'>
                    {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </strong>
                <button
                    onClick={product.clickEvent}
                    className='w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center transform transition-all duration-200 hover:bg-sky-500 hover:scale-105 cursor-pointer'
                >
                    <BsCartPlus size={20} color='#fff' />
                </button>
            </div>
        </section>
    )
}