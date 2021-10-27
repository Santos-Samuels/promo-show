import PromotionCard from 'components/Promotion/Card'
import LoadingAnimation from 'components/Layout/Loading'
import LayoutModal from 'components/Layout/Modal'
import { useState } from 'react'

const PromotionList = ({ loading, promotions, error }) => {
    const [promotionId, setPromotionId] = useState(null)

    if (error) {
        return <div className="text-2xl text-gray-500 text-center"> Error: {error} <br /> Ops! Parece que tivemos um problema. </div>
    }

    if (loading || promotions === null) {
        return <LoadingAnimation />
    }

    if (promotions.length === 0) {
        return <div className="text-2xl text-gray-500 text-center">Nenhum resultado encontrado!</div>
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            { promotions.map((promotion, index) => (
                <PromotionCard promotion={promotion} key={index} onClickComments={() => setPromotionId(promotion.id)} />
            )) }

            <LayoutModal isOpen={Boolean(promotionId)} onClickClose={() => setPromotionId(null)}>
                <h1>Teste</h1>
            </LayoutModal>

        </div>
    )
}

export default PromotionList