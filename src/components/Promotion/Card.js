const PromotionCard = ({promotion}) => (
    <div className="flex items-center space-x-3 text-sm border-2 rounded-md px-3 py-2 shadow-md">
        <img className="w-28 h-28" src={ promotion.imageUrl } />
        
        <section>
            <div className="text-left">
                <h1 className="font-bold">{ promotion.title }</h1>
                <span className="text-2xl text-blue-500 font-bold">{ promotion.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</span>
            </div>
            
            <footer className="flex justify-between items-center mt-1">
                { promotion.comments.length > 0 && (
                    <div className="text-gray-500 font-semibold">"{ promotion.comments[0].comment }"</div>
                ) }

                <div className="space-x-4 font-semibold text-blue-400">
                    <span className="hover:text-blue-500">{ promotion.comments.length } Comentários</span>
                    <a className="border-2 border-blue-400 rounded-md px-2 py-1 hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" href={ promotion.url } target="_blank">IR PARA O SITE</a>
                </div>
            </footer>
        </section>
    </div>
)

export default PromotionCard;