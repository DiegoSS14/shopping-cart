import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router'
import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'


export function Header() {
    const { cart, amount} = useContext(CartContext)

    return (
        <header className='flex w-full bg-slate-50'>
            <nav className='w-full h-16 max-w-7xl flex items-center justify-between px-5 m-auto'>
                <Link
                    to='/'
                    className='text-2xl font-bold text-zinc-900'>
                    Dev Shop
                </Link>

                <Link
                    className='relative'
                    to='/cart'
                >
                    <FiShoppingCart size={24} color='#121212' />
                    {amount > 0 && (
                        <span className='absolute -top-3 -right-3 w-6 h-6 flex justify-center items-center bg-sky-500 text-white text-xs rounded-full'>
                            {amount}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}