import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LinkInBio from '../pages/LinkInBio/LinkInBio'
import Menu from '../pages/Menu/Menu'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LinkInBio/>} />
            <Route path='/linkinbio' element={<LinkInBio/>} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    )
}

export default Router