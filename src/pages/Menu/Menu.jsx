import React from 'react'
import Header from '../../components/Header/Header'

const Menu = () => {
    return (
        <>
            <Header />

            <main className="w-full mt-[60px]">
                <iframe
                    src="/pdf/menu.pdf"
                    title="Menú de Santo Cielo"
                    className="block w-full h-[calc(100vh-60px)] border-0"
                />
            </main>
        </>
    )
}

export default Menu