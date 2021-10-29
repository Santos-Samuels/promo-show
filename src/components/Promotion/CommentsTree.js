import LoadingAnimation from "components/Layout/Loading"

const PromotionCommentsTree = ({ comments }) => {
    if(!comments) {
        return <div> <LoadingAnimation /> </div>
    }

    if(comments.length === 0) {
        return <h1 className="text-gray-400 font-semibold text-2xl text-center py-3">Não há comentários!</h1>
    }

    return (
        <div>
            <ul>
                { comments.map((item) => { 
                    return (
                        <article>
                            <li className="flex items-start">
                                <img className="rounded-full w-12" src={item.user.avatarUrl} alt={`Foto de ${item.user.name}`} />
                                
                                <div className="ml-3">
                                    <div className=" bg-gray-200 p-2 rounded-lg">
                                        <span className="font-semibold">{ item.user.name }</span>
                                        <p>{ item.comment }</p>
                                    </div>

                                    <footer className="space-x-3">
                                        <span className="text-gray-400">Há 2h</span>
                                        <button className="text-blue-500 hover:text-blue-600">Responder</button>
                                    </footer>                                
                                </div>

                            </li>
                        </article>
                    )
                }) }
            </ul>
        </div>
    )
}

export default PromotionCommentsTree