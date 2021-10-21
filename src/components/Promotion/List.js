import PromotionCard from 'components/Promotion/Card'

const PromotionList = ({ loading, promotions }) => {
    if(loading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="space-y-3">
            { promotions.map((promotion) => (
                <PromotionCard promotion={promotion} />
            )) }
        </div>
    )
}

export default PromotionList