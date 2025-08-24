import { useLoaderData } from 'react-router-dom'
import foodRecipe from '../assets/foodRecipe.png'
import { FaStopwatch } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa"

export default function RecipeItems() {

const allRecipes = useLoaderData()
console.log(allRecipes)

  return (
    <>
        <div className="card-container">
            {
                allRecipes?.map((item, index) => {
                    return(
                        <div className="card" key={index}>
                            <img src={`http://localhost:5000/images/${item.image}`} width="120px" height="100px" />
                            <div className="card-body">
                                <div className="title">{item.title}</div>
                                <div className="icons">
                                    <div className="timer"> <FaStopwatch />{item.time}</div>
                                    <FaHeart />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
