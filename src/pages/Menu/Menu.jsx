import React from 'react'
import Header from '../../components/Header/Header'

const Menu = () => {
    return (
        <>
            <Header />

            <main className="w-full pt-[60px]">
                <div className="w-full h-[calc(100vh-60px)]">
                    <iframe
                        src="/pdf/menu.pdf"
                        title="Menú Santo Cielo"
                        className="w-full h-full border-0"
                    />
                </div>
            </main>
        </>
    )
}

export default Menu