import * as React from 'react'
import '../styles/global.css'
import MenuComponent from './TopMenu'
import Footer from './Footer'
import iconSquare from '../images/icons/icon-square.svg'

const Layout = ({PageTitle, children, breadcrumbs, marginFooter}) => {
    return(
        <div className="relative w-full flex flex-col min-h-screen"> 
            <MenuComponent/>

            <main className="flex-1 xl:px-[20%] lg:px-[10%] md:px-[5%] pt-[5%] z-10">
                <img className="absolute -rotate-90 xl:right-[20%] sm:right-0 xl:w-[10rem] md:w-[8rem] sm:w-[6rem] sm:mt-20 " src={iconSquare}/>
                <h1 className="xl:text-5xl md:text-4xl sm:text-3xl pb-14 text-[#F47500] mb-10 font-semibold">{PageTitle}</h1>
                {children}
            </main>
            
            <img className='absolute xl:pl-[10%] md:w-[8rem] xl:w-[25rem] bottom-[10rem]' src={iconSquare}/>

            <Footer/>

            
        </div>
    )
}

export default Layout