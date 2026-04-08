import React from 'react'
import Header from '../../components/Header/Header'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const LinkInBio = () => {

    // 🔥 Container más suave
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
            },
        },
    };

    // 🔥 Animación moderna tipo Apple
    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <>
            <Header />

            <div className='w-full md:w-md m-auto md:w-[480px]'>

                {/* HEADER ANIMADO */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className='w-full h-auto flex flex-col items-center justify-center'
                >

                    <div className='w-full h-[300px] bg-[url("/img/background-img.png")] bg-cover bg-center'></div>

                    {/* LOGO ANIMADO */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className='w-[150px] h-[150px] bg-white shadow-md rounded-[50%] absolute top-[220px] border-4 border-white flex items-center justify-center overflow-hidden'
                    >
                        <img src="/img/santocielo-logo.png" className='w-[120px] h-[120px]' alt="Logo Santo Cielo" />
                    </motion.div>

                    <h1 className='text-[28px] font-bold mt-[80px]'>Grill & Fast food</h1>
                    <p className='text-[17px] text-zinc-400 mt-[-7px]'>@santocielorest</p>
                </motion.div>

                {/* BOTONES */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='w-full h-[300px] mt-5 flex flex-col items-center justify-center gap-6 mb-12'
                >

                    {/* MENÚ */}
                    <MotionLink
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        to="/menu"
                        className='w-[90%] h-[65px] border-[#CD0508] bg-[#CD0508] text-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-black hover:border-black'
                    >
                        Nuestro Menú 🍽️
                    </MotionLink>

                    {/* WHATSAPP */}
                    <motion.a
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://wa.me/573008652114"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-[90%] h-[65px] border-black bg-black text-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-white hover:text-black'
                    >
                        Pedir ahora 🍔
                    </motion.a>

                    {/* MAPS */}
                    <motion.a
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://maps.google.com/?q=Monteria+Cordoba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-black hover:text-white'
                    >
                        Cómo llegar 📍
                    </motion.a>

                    {/* EMAIL */}
                    <motion.a
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="mailto:holasantocielo@gmail.com?subject=Contacto%20Santo%20Cielo&body=Hola%20equipo%20de%20Santo%20Cielo,%20quiero%20más%20información."
                        className='w-[90%] h-[65px] border-black bg-white border-4 font-bold text-[20px] flex justify-center items-center cursor-pointer transition duration-300 hover:bg-black hover:text-white'
                    >
                        Te escuchamos 🤝
                    </motion.a>

                </motion.div>

            </div>
        </>
    )
}

export default LinkInBio;