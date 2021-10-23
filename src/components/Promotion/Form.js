import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

const PromotionForm = () => {
    const [values, setValues] = useState(initialValue)
    const history = useHistory()

    function onChange(ev) {
        const { name, value } = ev.target

        setValues({ ...values, [name]: value })
    }

    function onSubmit(ev) {
        ev.preventDefault()

        axios.post('http://localhost:5000/promotions', values)
        .then((response) => {
            history.push('/')
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-3">
                <div>
                    <label htmlFor="title">Título <span className="text-red-500">*</span></label>
                    <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="title" id="title" onChange={onChange} required />
                </div>

                <div>
                    <label htmlFor="url">Link do produto <span className="text-red-500">*</span></label>
                    <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="url" id="url" onChange={onChange} required />
                </div>

                <div>
                    <label htmlFor="imageUrl">Imagem (URL) <span className="text-red-500">*</span></label>
                    <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="imageUrl" id="imageUrl" onChange={onChange} required />
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="price">Preço <span className="text-red-500">*</span></label>
                        <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" step="0.01" name="price" id="price" min="0" onChange={onChange} required />
                    </div>

                    <div className="self-end">
                        <button className="bg-blue-500 hover:bg-blue-600 transistion duration-300 ease-in-out border border-gray-300 text-gray-100 font-semibold rounded-md py-1 w-full">Adicionar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm