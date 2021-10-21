import { Link } from 'react-router-dom'

const LayoutTheHeader = () => (
    <div className="px-5 pd:px-10 lg:px-20 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Promo<span className="text-blue-500">Show</span></Link>

        <nav className="space-x-5 font-semibold text-blue-500">
            <Link to="/" className="hover:text-blue-700">Início</Link>
            <Link to="/create" className="hover:text-blue-700">Adicionar Promoção</Link>
        </nav>
    </div>
)

export default LayoutTheHeader