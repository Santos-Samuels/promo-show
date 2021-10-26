import { Link } from 'react-router-dom'

const PromotionCard = ({promotion}) => (
    <div className="flex items-center space-x-3 text-sm border-2 rounded-md px-3 py-2 shadow-md">
        <img className="w-28 h-28" src={ promotion.imageUrl } alt={promotion.title} />
        
        <section className="w-full">
            <div className="text-left">
                <h1 className="font-bold">{ promotion.title }</h1>
                <span className="text-2xl text-blue-500 font-bold">{ Number(promotion.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</span>
            </div>
            
            <footer className="grid grid-cols-1 gap-3 mt-3">
                <div className="space-x-4 font-semibold text-blue-400 justify-self-end">
                    <span className="hover:text-blue-500 whitespace-nowrap">{ promotion.comments.length } Comentários</span>
                    <a className="border-2 border-blue-400 rounded-md px-2 py-1 hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out whitespace-nowrap" href={ promotion.url } target="_blank" rel="noopener noreferrer">IR PARA O SITE</a>
                    <Link to={`/edit/${promotion.id}`}>Editar</Link>
                </div>
            </footer>
        </section>
    </div>
)

export default PromotionCard;