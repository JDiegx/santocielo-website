import React from 'react'
import Header from '../../components/Header/Header'

const LinkInBio = () => {
    return (
        <>
            <Header />
            <div className='w-full md:w-md m-auto'>
                <div className='w-full h-auto flex flex-col items-center justify-center'  >
                    <div className='w-full h-[250px] bg-[url("/img/background-img.png")] bg-cover bg-center' >
                    </div>
                    <div className='w-[150px] h-[150px] bg-white shadow-md rounded-[50%] absolute top-[170px] border-4 border-white flex items-center justify-center overflow-hidden'>
                        <img src="/img/santocielo-logo.png" className='w-[120px] h-[120px]' alt="Logo of Kalca" />
                    </div>
                    <h1 className='text-[27px] font-bold mt-[80px]'>Grill & Fast food</h1>
                    <p className='text-[17px] text-zinc-400 mt-[-7px]'>@santocielorest</p>
                </div>
                <div className='w-full h-[300px] mt-5 flex flex-col items-center justify-center gap-6 mb-12 '>
                    <a href="" target='_blank' className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black '>Nuestro Menú 🍽️</a>
                    <a href="" target='_blank' className='w-[90%] h-[65px] border-black bg-black text-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-white hover:text-black hover:border-black '>Pedir ahora 🍔</a>
                    <a href="" target='_blank' className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black '>Cómo llegar 📍</a>
                    <a href='' target='_blank' className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black '>Te escuchamos 🤝</a>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default LinkInBio