import React from 'react'
import Header from '../../components/Header/Header'
import {
    TransformWrapper,
    TransformComponent,
} from 'react-zoom-pan-pinch'

const Menu = () => {
    return (
        <>
            <Header />

            <main className="w-full pt-[60px] bg-white overflow-hidden">
                <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={4}

                    centerOnInit={true}
                    centerZoomedOut={true}

                    limitToBounds={true}
                    centerZoomedOut={true}

                    doubleClick={{
                        mode: 'zoomIn',
                        step: 0.7,
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

                    alignmentAnimation={{
                        disabled: false,
                        sizeX: 100,
                        sizeY: 100,
                    }}
                >
                    <TransformComponent
                        wrapperClass="!w-full"
                        contentClass="!w-full"
                    >
                        <div className="w-full">
                            <img
                                src="/menu/1.webp"
                                alt="Menú Santo Cielo - Página 1"
                                className="block w-full h-auto"
                                draggable={false}
                            />

                            <img
                                src="/menu/2.webp"
                                alt="Menú Santo Cielo - Página 2"
                                className="block w-full h-auto"
                                draggable={false}
                            />
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </main>
        </>
    )
}

export default Menu