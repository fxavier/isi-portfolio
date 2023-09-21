"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
             <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    I.S.I & SERVIÇOS, Lda
                </span>
                <br></br>
                <TypeAnimation
              sequence={[
                "INFORMÁTICA",
                1000,
                "REDES",
                1000,
                "SISTEMAS DE SEGURANÇA",
                1000,
                "SERIGRAFIA",
                1000,
                "GRÁFICA e IMOBILIÁRIA",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
             </h1>
                <div>
                    <button className='px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Contacte-nos</button>
                    <button className='px-6 py-3 w-full rounded-full sm:w-fit bg-transparent hover:bg-slate-800 border border-white mt-3 text-white'>Nossos serviços</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                     src='/images/hero-image.png'
                     alt='hero-section'
                     className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                     width={300}
                     height={300}
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection