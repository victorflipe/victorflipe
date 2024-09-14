import * as React from "react"
import Layout from "../components/layout"
import Technology from "../components/Technology"
import figma from "../images/icons/figma.png"
import trello from "../images/icons/trello.png"
import javascript from "../images/icons/javascript.svg"
import vuejs from "../images/icons/vue-js.svg"
import reactjs from "../images/icons/react-js.svg"
import python from "../images/icons/python.svg"
import tailwind from "../images/icons/tailwind.svg"
import django from "../images/icons/django.svg"
import flask from "../images/icons/flask.png"
import vscode from "../images/icons/vscode.svg"
import wordpress from "../images/icons/wordpress.svg"
import php from "../images/icons/php.svg"
import chatgpt from "../images/icons/chatgpt.svg"
import focustodo from "../images/icons/focustodo.png"
import drawio from "../images/icons/drawio.png"
import powerapps from "../images/icons/powerapps.png"
import azureboards from "../images/icons/azure-boards.svg"
import nodejs from "../images/icons/node-js.svg"
import mysql from "../images/icons/mysql.svg"
import postgresql from "../images/icons/postgresql.svg"
import bootstrap from "../images/icons/bootstrap.svg"
import git from "../images/icons/git.svg"
import gatsby from "../images/icons/gatsby.svg"

const Stack = () => {

    const stackList = [
        {
            name: "JavaScript",
            type: "development",
            active: true,
            image: javascript
        },
        {
            name: "Nodejs",
            type: "development",
            active: true,
            image: nodejs
        },
        {
            name: "React",
            type: "development",
            active: true,
            image: reactjs
        },
        {
            name: "Gatsby",
            type: "development",
            active: true,
            image: gatsby
        },
        {
            name: "Vue.js",
            type: "development",
            active: true,
            image: vuejs
        },
        {
            name: "Tailwind",
            type: "development",
            active: true,
            image: tailwind
        },
        {
            name: "Bootstrap",
            type: "development",
            active: false,
            image: bootstrap
        },
        {
            name: "Python",
            type: "development",
            active: true,
            image: python
        },
        {
            name: "Django",
            type: "development",
            active: true,
            image: django
        },
        {
            name: "Flask",
            type: "development",
            active: false,
            image: flask
        },
        {
            name: "PostgreSQL",
            type: "development",
            active: false,
            image: postgresql
        },
        {
            name: "MySQL",
            type: "development",
            active: false,
            image: mysql
        },
        {
            name: "Azure Boards",
            type: "productivity",
            active: true,
            image: azureboards
        },
        {
            name: "Trello",
            type: "productivity",
            active: true,
            image: trello
        },
        {
            name: "Git",
            type: "development",
            active: true,
            image: git
        },
        {
            name: "Power Apps",
            type: "development",
            active: true,
            image: powerapps
        },
        {
            name: "VSCode",
            type: "development",
            active: true,
            image: vscode
        },
        {
            name: "Wordpress",
            type: "development",
            active: false,
            image: wordpress
        },
        {
            name: "PHP",
            type: "development",
            active: false,
            image: php
        },
        {
            name: "Figma",
            type: "design",
            active: true,
            image: figma
        },
        {
            name: "ChatGPT",
            type: "development",
            active: true,
            image: chatgpt
        },
        {
            name: "Focus - TO DO",
            type: "productivity",
            active: true,
            image: focustodo
        },
        {
            name: "draw.io",
            type: "development",
            active: true,
            image: drawio
        },
    ]

               
    return (
        <Layout PageTitle="Tecnologias e Ferramentas">
            
                <div className="sm:px-20 w-full">
                    <div className="border rounded-lg border-orange-200/60 bg-orange-50">
                        <span className="flex justify-center text-lg text-gray-500 font-semibold my-2">Status Atual</span>
                        <div className="flex gap-5 justify-center mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-lg"></span>
                                <span>Uso Frequente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-400 rounded-lg"></span>
                                <span>Não tão frequente</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-8 mt-10 justify-center mb-20">
                    {
                        stackList.map(item => {
                            return (
                            <Technology name={item.name} type={item.type} active={item.active ? "true" : ""} key={item.name}>
                                <img className="w-10" src={item.image} alt={item.name}/>
                            </Technology>)
                        })
                    }

                </div>

            

            
        </Layout>
    )
}

export const Head = () => <title>Stack</title>

export default Stack

