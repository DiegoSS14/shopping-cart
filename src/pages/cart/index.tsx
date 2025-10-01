import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router'

export function Cart() {
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

    return (
        <div>
            <main className="w-full max-w-7xl flex flex-col items-center justify-center gap-7 mx-auto">
                <h1 className="text-2xl font-bold mt-6">Meu carrinho</h1>

                <div className="w-full flex flex-col items-center gap-6 px-5">

                    {
                        cart && cart.map(item => (
                            <section
                                key={item.id}
                                className="w-full flex items-center justify-between p-5 gap-6 border-1 border-zinc-200 bg-white rounded-lg transform duration-200 hover:scale-101 hover:drop-shadow-x1"
                            >
                                <Link to={`/products/${item.id}`}>
                                    <img
                                        className="w-20 lg:w-30"
                                        src={item.cover}
                                        alt={item.description}
                                    />
                                </Link>

                                <strong className="text-lg">
                                    Preço: {item.price.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </strong>

                                <div className="flex gap-3 items-center justify-center">
                                    <button
                                        className="w-8 h-8 flex items-center justify-center bg-zinc-400 text-white font-bold rounded-lg transform duration-200 hover:bg-red-500 hover:scale-101 cursor-pointer"
                                        onClick={() => { removeItemCart(item) }}
                                    >-</button>
                                    <span className="font-bold">
                                        {item.amount}
                                    </span>
                                    <button
                                        className="w-8 h-8 flex items-center justify-center bg-zinc-400 text-white font-bold rounded-lg transform duration-200 hover:bg-sky-500 hover:scale-101 cursor-pointer"
                                        onClick={() => addItemCart(item)}
                                    >+</button>
                                </div>

                                <strong className="text-lg">
                                    Subtotal: {item.total.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>
                            </section>
                        )
                        )
                    }

                    {total !== 0 && (
                        <div className='w-full flex justify-center'>
                            <h1 className='font-bold text-center text-lg'>
                                Total: {total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </h1>
                        </div>
                    )}

                    {total === 0 && (
                        <div className='w-fit flex flex-col items-center font-bold gap-2 p-6 border border-dashed border-gray-400 rounded-lg'>
                            <span>Ops, seu carrinho está vazio...</span>
                            <Link
                                to='/'
                                className='flex items-center justify-center h-10 w-fit p-5 bg-gray-600 rounded-lg text-white font-medium'
                            >Acessar produtos</Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}