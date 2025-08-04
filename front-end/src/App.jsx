import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home.jsx'
import MainNavigation from './components/MainNavigation.jsx'

const getAllRecipes = async () => {
    let allRecipes = []
    await axios.get('http://localhost:5000/recipe')
    .then(res => {
        allRecipes=res.data
    })
    return allRecipes
}

const router = createBrowserRouter([
    {
        path: '/', element: <MainNavigation />, children:
            [
                { path: '/', element: <Home />, loader: getAllRecipes }
            ]
    }
])

export default function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}