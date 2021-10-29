import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal-root')

const LayoutModal = ({ children, isOpen, onClickClose }) => {
    if(!isOpen) {
        return null
    }

    return ReactDOM.createPortal(
        <div className="max-w-5xl max-auto m-auto">
            <div className="fixed bg-black bg-opacity-75 w-full h-full top-0 left-0"></div>
            <section className="relative absolute top-0 bg-gray-100 mx-5 md:mx-10 lg:mx-20 my-8 rounded-lg p-5">
                <button onClick={onClickClose} className="bi bi-x text-5xl absolute right-0 top-0 m-1"></button>

                <div>
                    { children }
                </div>
            </section>
        </div>,
        portalRoot
    )

}

export default LayoutModal