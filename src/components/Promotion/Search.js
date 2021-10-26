import useApi from 'components/hook/useApi'
import { useEffect, useState } from 'react'
import PromotionList from 'components/Promotion/List'
 
const PromotionSearch = () => {
  const [search, setSearch] = useState('')
  const [load, loadStatus] = useApi({
    debounceDelay: 300,
    url: '/promotions',
    method: 'GET',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined
    }
  })

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <input type="search" className="border rounded w-full py-2 px-3 mb-6" placeholder="Buscar" value={search} onChange={(ev) => setSearch(ev.target.value)} />
      
      <PromotionList promotions={loadStatus.data} loading={loadStatus.loading} error={loadStatus.error} />
    </div>
  )
}

export default PromotionSearch;