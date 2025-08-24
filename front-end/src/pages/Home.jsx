import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import foodRecipe from '../assets/foodRecipe.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RecipeItems from '../components/RecipeItems'
import Model from '../components/Model'
import InputForm from '../components/InputForm'

export default function Home() {
    
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem('token')
        if(token){
            navigate('/addRecipe')
        }
        else{
            setIsOpen(true)
        } 
    }

    return(
        <>
            <section className="home">
                <div className="left">
                    <h1>FOOD RECIPE</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos illum animi saepe beatae reiciendis eveniet, impedit quisquam, molestiae excepturi unde, voluptates libero. Non fuga animi ipsa excepturi repudiandae obcaecati, a enim commodi aliquid dolorum dolor aperiam? Dolorum beatae deleniti quia. A suscipit laudantium veniam consectetur molestias ducimus aperiam aut!</h5>
                    <button onClick={addRecipe}>Share Your Recipe</button>
                </div>
                <div className="right">
                    <img src={foodRecipe} width="320px" height="300px" />
                </div>
            </section>
            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,96L30,85.3C60,75,120,53,180,69.3C240,85,300,139,360,149.3C420,160,480,128,540,106.7C600,85,660,75,720,85.3C780,96,840,128,900,144C960,160,1020,160,1080,154.7C1140,149,1200,139,1260,122.7C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
             { (isOpen) && <Model onClose={()=>setIsOpen(false)}> <InputForm setIsOpen={() => setIsOpen(false)} /> </Model>}
            <div className="recipe">
                <RecipeItems />
            </div>
        </>
    )
}