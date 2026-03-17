import React from 'react'

const Header = () => {
    return (
        <header className='w-full h-[50px] flex items-center justify-center fixed backdrop-blur-md bg-white/30 z-10 top-0'>
            <img src="/img/santocielo-logo.svg" alt="Logo of Santo Cielo!" className='w-[50px]' />
        </header>
    )
}

export default Header