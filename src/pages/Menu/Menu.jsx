import React from 'react'
import Header from '../../components/Header/Header'
import {
    TransformWrapper,
    TransformComponent,
} from 'react-zoom-pan-pinch'

const Menu = () => {
    const pages = [
        '/menu/1.webp',
        '/menu/2.webp',
    ]

    return (
        <>
            <Header />

            <main className="w-full pt-[60px] bg-white">
                <div className="w-full">
                    {pages.map((page, index) => (
                        <TransformWrapper
                            key={page}
                            initialScale={1}
                            minScale={1}
                            maxScale={4}
                            centerOnInit
                            doubleClick={{
                                mode: 'zoomIn',
                            }}
                            pinch={{
                                disabled: false,
                            }}
                            wheel={{
                                disabled: true,
                            }}
                            panning={{
                                disabled: false,
                            }}
                        >
                            <TransformComponent
                                wrapperClass="!w-full"
                                contentClass="!w-full"
                            >
                                <img
                                    src={page}
                                    alt={`Menú Santo Cielo - Página ${index + 1}`}
                                    className="block w-full h-auto"
                                    draggable={false}
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Menu