import { useParams } from "react-router-dom";

const PromotionForm = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Promotion form page 
                {id && <p>id: { id }</p>}
            </h1>
        </div>
    )
}

export default PromotionForm