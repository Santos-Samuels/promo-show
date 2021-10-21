import axios from 'axios'
import { useEffect, useState } from 'react'
import PromotionList from 'components/Promotion/List'
 
const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = {}

    if(search) {
      params.title_like = search
    }

    axios.get('http://localhost:5000/promotions?_embed=comments', { params })
    .then((response) => {
      setPromotions(response.data)
    });
  }, [search]);
  

  return (
    <div>
      <input type="search" className="border rounded w-full py-2 px-3 mb-6" placeholder="Buscar" value={search} onChange={(ev) => setSearch(ev.target.value)} />
      
      <PromotionList loading={!promotions.length} promotions={promotions}/>
    </div>
  )
}

export default PromotionSearch;