import PromotionCard from 'components/Promotion/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
 
const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then((response) => {
      setPromotions(response.data)
    });
  }, []);
  

  return (
    <div className="space-y-3">
      { promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      )) }
    </div>
  )
}

export default PagesPromotionSearch;