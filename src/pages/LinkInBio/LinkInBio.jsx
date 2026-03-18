import React from 'react'
import Header from '../../components/Header/Header'
import { motion } from "framer-motion";

const LinkInBio = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Header />
            <div className='w-full md:w-md m-auto md:w-[480px]'>
                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <div className='w-full h-[300px] bg-[url("/img/background-img.png")] bg-cover bg-center'>
                    </div>

                    <div className='w-[150px] h-[150px] bg-white shadow-md rounded-[50%] absolute top-[220px] border-4 border-white flex items-center justify-center overflow-hidden'>
                        <img src="/img/santocielo-logo.png" className='w-[120px] h-[120px]' alt="Logo of Kalca" />
                    </div>

                    <h1 className='text-[28px] font-bold mt-[80px]'>Grill & Fast food</h1>
                    <p className='text-[17px] text-zinc-400 mt-[-7px]'>@santocielorest</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='w-full h-[300px] mt-5 flex flex-col items-center justify-center gap-6 mb-12'
                >
                    <motion.a
                        variants={item}
                        href=""
                        target='_blank'
                        className='w-[90%] h-[65px] border-[#CD0508] bg-[#CD0508] text-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black'
                    >
                        Nuestro Menú 🍽️
                    </motion.a>

                    <motion.a
                        variants={item}
                        href=""
                        target='_blank'
                        className='w-[90%] h-[65px] border-black bg-black text-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-white hover:text-black hover:border-black'
                    >
                        Pedir ahora 🍔
                    </motion.a>

                    <motion.a
                        variants={item}
                        href=""
                        target='_blank'
                        className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black'
                    >
                        Cómo llegar 📍
                    </motion.a>

                    <motion.a
                        variants={item}
                        href=""
                        target='_blank'
                        className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black'
                    >
                        Te escuchamos 🤝
                    </motion.a>
                </motion.div>

                <div>
                </div>
            </div>
        </>
    )
}

export default LinkInBio