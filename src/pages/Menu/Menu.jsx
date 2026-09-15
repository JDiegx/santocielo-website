import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import Header from '../../components/Header/Header'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const Menu = () => {
    const [numPages, setNumPages] = useState(null)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <Header />

            <section className="w-full flex justify-center mt-[60px]">
                <Document
                    file="/pdf/menu-santocielo-new.pdf"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                    {Array.from(new Array(numPages), (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={width}
                        />
                    ))}
                </Document>
            </section>
        </>
    )
}

export default Menu