import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }
  
    
    return (
        <>

            <div className='home'>
                <div className='left'>
                    <h1>From Kitchen to Plate!</h1>
                    <h5>A place where flavors meet, stories unfold, and every dish feels like home. Share, explore, and savor the joy of cooking!</h5>
                    <button onClick={()=> navigate("/addRecipe")}>Share your recipe</button>
                </div>
                
            </div>
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
        <div className = 'recipe'>
            <RecipeItems/>
        </div>
        </>
    )
}
