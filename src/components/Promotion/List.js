import PromotionCard from 'components/Promotion/Card'
import LoadingAnimation from 'components/Layout/Loading'

const PromotionList = ({ loading, promotions }) => {
    if(loading) {
        return <LoadingAnimation />
    }

    return (
        <div className="space-y-3">
            { promotions.map((promotion, index) => (
                <PromotionCard promotion={promotion} key={index} />
            )) }
        </div>
    )
}

export default PromotionList