import PromotionCard from 'components/Promotion/Card'
import LoadingAnimation from 'components/Layout/Loading'

const PromotionList = ({ loading, promotions, error }) => {
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
        <div className="space-y-3">
            { promotions.map((promotion, index) => (
                <PromotionCard promotion={promotion} key={index} />
            )) }
        </div>
    )
}

export default PromotionList