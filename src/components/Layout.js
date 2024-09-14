import * as React from 'react'
import '../styles/global.css'
import MenuComponent from './TopMenu.js'
import Footer from './Footer.js'
import iconSquare from '../images/icons/icon-square.svg'

const Layout = ({PageTitle, children, breadcrumbs, marginFooter, noTitle}) => {
    return(
        <div className="relative w-full flex flex-col min-h-screen"> 
            <MenuComponent/>

            <main className="flex-1 xl:px-[20%] lg:px-[10%] md:px-[5%] pt-[5%] px-[10%] z-10">
                <img className="hidden md:flex absolute -rotate-90 xl:right-[20%] sm:right-0 xl:w-[10rem] md:w-[8rem] sm:w-[6rem] sm:mt-20 " src={iconSquare}/>
                <h1 className={`xl:text-5xl md:text-4xl text-3xl pb-14 text-[#F47500] mb-10 font-semibold md:text-left text-center mt-10 ${noTitle ? "hidden" : ""}`}>{PageTitle}</h1>
                {children}
            </main>
            
            <img className='absolute xl:pl-[10%] md:w-[8rem] xl:w-[25rem] bottom-[10rem]' src={iconSquare}/>

            <Footer/>

            
        </div>
    )
}

export default Layout