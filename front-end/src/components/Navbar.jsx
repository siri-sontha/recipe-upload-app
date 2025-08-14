import Model from "./Model"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const checkLogin = () => {
        setIsOpen(true)
    }

    return (
        <>
            <header>
                <h2>FOOD BLOG</h2>
                <ul>
                    <li>Home</li>
                    <li>My Recipe</li>
                    <li>Favorites</li>
                    <li onClick={checkLogin}>Login</li>
                </ul>
            </header>
            { (isOpen) && <Model onClose={()=>setIsOpen(false)} />}
        </>
    )
}