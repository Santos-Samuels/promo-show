import { useParams } from "react-router-dom";

const PagesPromotionForm = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Promotion form page 
                {id && <p>id: { id }</p>}
            </h1>
        </div>
    )
}

export default PagesPromotionForm;