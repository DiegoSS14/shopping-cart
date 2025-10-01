import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { type ProductsProps } from '../home'
import api from '../../services/api'
import { BsCartPlus } from 'react-icons/bs'
import toast from 'react-hot-toast'
import { CartContext } from '../../contexts/CartContext'

export function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductsProps>()
    const { addItemCart } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function getProduct() {
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }

        getProduct()
    }, [])

    function handleClickCart(product: ProductsProps) {
        addItemCart(product)
        toast.success("Produto adicionado ao carrinho", {
            style: {
                backgroundColor: "#121212",
                color: "#fff"
            }
        })
        navigate('/cart')
    }

    return (
        <div className='w-full px-5 max-w-7xl flex flex-col justify-center items-top mt-8 m-auto gap-2 sm:flex-row sm:gap-10'>
            <img
                className='max-full sm:max-w-1/2 outline-1 outline-gray-300 rounded-2xl cursor-pointer'
                src={product?.cover}
            />
            <div className='w-full flex flex-col gap-4 m-4'>
                <h1 className='font-semibold text-2xl'>1 {product?.title}</h1>
                <span>{product?.description}</span>
                <span
                    className='text-bold text-2xl text-sky-500'
                >{product?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

                <button 
                className='w-fit h-12 px-4 gap-2 bg-sky-500 rounded-lg flex items-center justify-center transform transition-all duration-200 hover:bg-sky-600 hover:scale-102 cursor-pointer'
                onClick={() => {
                    if(!product) return
                    handleClickCart(product)
                }}
                >
                    <span className='font-semibold text-white'>Adicionar ao carrinho</span>
                    <BsCartPlus size={20} color='#fff' />
                </button>
            </div>
        </div>
    )
}