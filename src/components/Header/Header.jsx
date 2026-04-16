import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-full h-[50px] flex items-center justify-center fixed backdrop-blur-md bg-white/40 z-10 top-0'>
            <Link to={"/"}>
                <img src="/img/santocielo-logo.svg" alt="Logo of Santo Cielo!" className='w-[50px]' />
            </Link>
        </header>
    )
}

export default Header