import * as React from "react"
import Layout from "../components/layout"
import dfSolutionsLogo from "../images/logos/df-solutions_logo.jpeg"
import contassConsultoria from "../images/logos/contass-consultoria_logo.jpeg"
import obucTechLogo from "../images/logos/obuc-tech_logo.jpeg"
import myPhoto from "../images/my-photo.jpg"
import linkedin from "../images/icons/linkedin.svg"
import gmail from "../images/icons/gmail.svg"
import github from "../images/icons/github-icon.svg"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" marginFooter="true" noTitle="true">
      
      {/* Content main */}
      
      <h1 className="xl:text-5xl md:text-4xl text-3xl pb-14 text-[#6B6B6B] font-semibold mt-10">
        Muito prazer,<br/> eu sou o <span className="text-[#F47500]">Victor Felipe</span><br/>
      </h1>
      
      <div className="text-base content-center">

        <div className="bg-white rounded-[20px] border shadow-sm border-[#F47500]/[.28] items-center p-10">
          <div className="sm:flex items-center sm:justify-around sm:p-5">

            <div className=" text-[#6B6B6B] sm:px-5 sm:py-10 h-[80%] hover:border-solid sm:w-2/4 text-justify">
                <p className="text-center sm:text-left font-semibold text-lg text-orange-600">Bem vindo(a) a minha página!</p><br/><br/>
                <div className="w-[15rem] p-5 justify-center sm:hidden flex mb-10">
                  <img className="rounded-[20px] shadow-xl shadow-slate-400 w-[80%]" src={myPhoto}/>
                </div>
                <p>
                Sou apaixonado por UX/UI, sendo um grande entusiasta do frontend 
                e tudo que vise facilitar os serviços humanos usando tecnologia, estou há mais de 05 anos construindo soluções por meio da codificação...
                </p>
                <br/>
                
            </div>
          
            <div className="hidden w-[15rem] p-5 justify-center sm:flex">
              <img className="rounded-[20px] shadow-xl rotate-6 shadow-slate-400 w-[80%]" src={myPhoto}/>
            </div>
          </div>

          <div className="flex justify-center gap-10 items-center mt-3 px-10">
            <a href="https://www.linkedin.com/in/victorroli/" className="" target="_blank" rel="noreferrer">
                <img className="shadow-md shadow-gray-300 rounded-md" src={linkedin}/>
            </a>
            <a href="mailto:victorf.roliver@gmail.com" className="" target="_blank" rel="noreferrer">
                <img className="shadow-md shadow-gray-300 rounded-md" src={gmail}/>
            </a>
            <a href="https://github.com/victorroli" className="" target="_blank" rel="noreferrer">
                <img className="shadow-md shadow-gray-300 rounded-md" src={github}/>
            </a>
          </div>

        </div>


      </div>

      
      {/* Work */}
      <div className="relative pt-20">
        <h2 className="text-3xl text-[#F47500] font-semibold pb-10 ">Experiência</h2>
        
        <div className="bg-white/40 backdrop-blur-sm border border-[#F47500]/[.28] text-[#6B6B6B] px-10 py-10 rounded-[20px] shadow-sm mb-20">
          
          <ul className="lg:flex lg:flex-wrap lg:justify-between lg:gap-8 mx-auto sm:w-2/3 lg:w-full">
            <li className="sm:p-5 py-3 flex">
              <div className="">
                <div className="w-full flex content-center items-center justify-between gap-x-5">
                  
                  <div className="w-[5rem]">
                    <img className="border p-2 bg-white border-gray-200 shadow-md rounded-lg" src={obucTechLogo} alt="icon"/>
                  </div>
                  
                  <div className="">
                    <p className="text-[#F47500] sm:text-xl font-semibold">Obuc</p>
                    <p className="sm:text-base text-gray-500 text-sm">Analista de Programação</p>
                    <span className="items-center hidden sm:flex text-gray-500">
                      <b>2021 - Até o momento</b>
                    </span>
                  </div>
                </div>
              </div>
            </li>

            <li className="sm:p-5 py-3 flex">
              <div className="">
                <div className="w-full flex content-center items-center justify-between gap-x-5">
                  
                  <div className="w-[5rem]">
                    <img className="border p-2 bg-white border-gray-200 shadow-md rounded-lg" src={contassConsultoria} alt="Logo Contass Consultoria"/>
                  </div>
                  
                  <div className="">
                    <p className="text-[#F47500] sm:text-xl font-semibold">Contass Consultoria</p>
                    <p className="sm:text-base text-gray-500 text-sm">Desenvolvedor PHP</p>
                    <span className="items-center hidden sm:flex text-gray-400">
                      <b>2019 - 2021</b>
                    </span>
                  </div>

                </div>
              </div>
            </li>

            <li className="sm:p-5 py-3 flex">
              <div className="">
                <div className="w-full flex content-center items-center justify-between gap-x-5">
                  
                  <div className="w-[5rem]">
                    <img className="border p-2 bg-white border-gray-200 shadow-md rounded-lg" src={dfSolutionsLogo} alt="Logo DF Soluções"/>
                  </div>

                  <div className="">
                    <p className="text-[#F47500] sm:text-xl font-semibold">DF Soluções</p>
                    <p className="sm:text-base text-gray-500 text-sm">Desenvolvedor Web</p>
                    <span className="items-center hidden sm:flex text-gray-400">
                      <b>2019</b>
                    </span>
                  </div>

                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
