import React from 'react'
import Header from '../../components/Header/Header'

const Menu = () => {
    return (
        <>
            <Header />

            <main className="w-full pt-[60px] bg-white">
                <div className="w-full max-w-4xl mx-auto">
                    <img
                        src="/menu/1.webp"
                        alt="Menú Santo Cielo - Página 1"
                        className="block w-full h-auto"
                    />

                    <img
                        src="/menu/2.webp"
                        alt="Menú Santo Cielo - Página 2"
                        className="block w-full h-auto"
                    />
                </div>
            </main>
        </>
    )
}

export default Menu