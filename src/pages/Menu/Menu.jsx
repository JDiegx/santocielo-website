import React from 'react'
import Header from '../../components/Header/Header'

const Menu = () => {
    return (
        <>
            <Header />

            <section className="w-full mt-[60px]">
                <iframe
                    src="/pdf/menu-santocielo-new.pdf"
                    title="Menú de Santo Cielo"
                    className="w-full h-[calc(100vh-60px)] border-0"
                />
            </section>
        </>
    )
}

export default Menu