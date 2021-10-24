import LayoutContainer from 'components/Layout/Container'
import PromotionForm from 'components/Promotion/Form'
import { useParams } from 'react-router'

const PagesPromotionForm = () => {
    const { id } = useParams()

    return (
        <LayoutContainer>
            <PromotionForm id={id ? Number(id) : null} />
        </LayoutContainer>
    )
}

export default PagesPromotionForm;