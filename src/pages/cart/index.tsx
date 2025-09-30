import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <main className="w-full max-w-7xl flex flex-col items-center justify-center gap-7 mx-auto">
                <h1 className="text-2xl font-bold mt-6">Meu carrinho</h1>

                <div className="w-full flex flex-col gap-6 px-5">
                    {
                        cart && cart.map(item => (
                            <section
                                key={item.id}
                                className="w-full flex items-center justify-between p-5 gap-6 border-1 border-zinc-200 bg-white rounded-lg transform duration-200 hover:scale-101 hover:drop-shadow-x1"
                            >
                                <img
                                    className="w-20 lg:w-30"
                                    src={item.cover}
                                    alt={item.description}
                                />

                                <strong className="text-lg">
                                    Preço: {item.price.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </strong>

                                <div className="flex gap-3 items-center justify-center">
                                    <button
                                        className="w-8 h-8 flex items-center justify-center bg-zinc-400 text-white font-bold rounded-lg transform duration-200 hover:bg-red-500 hover:scale-101 cursor-pointer"
                                    >-</button>
                                    <span className="font-bold">
                                        {item.amount}
                                    </span>
                                    <button
                                        className="w-8 h-8 flex items-center justify-center bg-zinc-400 text-white font-bold rounded-lg transform duration-200 hover:bg-sky-500 hover:scale-101 cursor-pointer"
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
                </div>
            </main>
        </div>
    )
}