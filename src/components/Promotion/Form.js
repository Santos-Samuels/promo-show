import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import LoadingAnimation from 'components/Layout/Loading'

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

const PromotionForm = ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValue)
    const history = useHistory()

    useEffect(() => {
      if(id) {
          axios.get(`http://localhost:5000/promotions/${id}`)
          .then((response) => {
              console.log(response.data);
              setValues(response.data)
          })
      }      
    }, [id])

    function onChange(ev) {
        const { name, value } = ev.target

        setValues({ ...values, [name]: value })
    }

    function onSubmit(ev) {
        ev.preventDefault()

        const method = id ? 'put' : 'post'
        const url = id ? `http://localhost:5000/promotions/${id}` : 'http://localhost:5000/promotions'

        axios[method](url, values)
        .then((response) => {
            history.push('/')
        })
    }

    if(!values) {
        return <LoadingAnimation />
    }

    return (
        <div>
            <h1 className="font-semibold text-blue-500 text-2xl border-b pb-1 mb-4">{ id ? 'Editar promoção' : 'Adicionar nova promoção' }</h1>

            <form onSubmit={onSubmit} className="space-y-3">
                <div>
                    <label htmlFor="title">Título <span className="text-red-500">*</span></label>
                    <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="title" id="title" onChange={onChange} value={id ? values.title : ''} required />
                </div>

                <div>
                    <label htmlFor="url">Link do produto <span className="text-red-500">*</span></label>
                    <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="url" id="url" onChange={onChange} value={id ? values.url : ''} required />
                </div>

                <div>
                    <label htmlFor="imageUrl">Imagem (URL) <span className="text-red-500">*</span></label>
                    <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="imageUrl" id="imageUrl" onChange={onChange} value={id ? values.imageUrl : ''} required />
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="price">Preço <span className="text-red-500">*</span></label>
                        <input className="w-full border border-gray-200 rounded-md py-1 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" step="0.01" name="price" id="price" min="0" onChange={onChange} value={id ? values.price : ''} required />
                    </div>

                    <div className="self-end">
                        <button className="bg-blue-500 hover:bg-blue-600 transistion duration-300 ease-in-out border border-gray-300 text-gray-100 font-semibold rounded-md py-1 w-full"> {id ? 'Editar' : 'Adicionar'} </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm