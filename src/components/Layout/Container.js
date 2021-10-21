import TheHeader from 'components/Layout/TheHeader'

const LayoutContainer = ({children}) => (
    <div>
        <TheHeader />

        <section className="mx-5 md:mx-10 lg:mx-20 my-8">
            { children }
        </section>
    </div>
)

export default LayoutContainer;