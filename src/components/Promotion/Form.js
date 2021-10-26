import useApi from 'components/hook/useApi'
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
    const [load] = useApi({
        url: `/promotions/${id}`,
        method: 'GET',
        onCompleted: (response) => {
            setValues(response.data)
        }
    })

    const[save, saveStatus] = useApi({
        url: id ? `/promotions/${id}` : '/promotions',
        method: id ? 'PUT' : 'POST',
        data: values,
        onCompleted: (response) => {
            if (!response.error) {
                history.push('/')
            }
        }
    })

    useEffect(() => {
      if(id) {
          load()
        }      
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    function onChange(ev) {
        const { name, value } = ev.target

        setValues({ ...values, [name]: value })
    }

    function onSubmit(ev) {
        ev.preventDefault()
        save()
    }

    if (!values) {
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

            {saveStatus.loading && <h1 className="text-gray-500 text-center mt-3">Salvando alterações...</h1>}
        </div>
    )
}

export default PromotionForm