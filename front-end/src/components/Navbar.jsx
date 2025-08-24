import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

import Model from "./Model"
import InputForm from "./InputForm"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    let token=localStorage.getItem("token")
    const [isLogin,setIsLogin]=useState(token ? false : true)

    useEffect(()=>{
        setIsLogin(token ? false : true)
    },[token]) 

    const checkLogin = () => {
        if(token){
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            setIsLogin(true)
        }
        else{
            setIsOpen(true)
        }
    }

    return (
        <>
            <header>
                <h2>FOOD BLOG</h2>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/myRecipe" : "/"}>My Recipe</NavLink></li>
                    <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/favRecipe" : "/"}>Favorites</NavLink></li>
                    <li onClick={checkLogin}><p className="login">{ (isLogin)? "Login" : "Logout" } </p></li>
                </ul>
            </header>
            { (isOpen) && <Model onClose={()=>setIsOpen(false)}> <InputForm setIsOpen={() => setIsOpen(false)} /> </Model>}
        </>
    )
}