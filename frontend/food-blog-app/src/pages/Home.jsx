import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import RecipeItems from '../components/RecipeItems'


export default function Home() {
    return (
        <>

            <div className='home'>
                <div className='left'>
                    <h1>From Kitchen to Plate!</h1>
                    <h5>A place where flavors meet, stories unfold, and every dish feels like home. Share, explore, and savor the joy of cooking!</h5>
                    <button>Share your recipe</button>
                </div>
                
            </div>

        <div className = 'recipe'>
            <RecipeItems/>
        </div>
        </>
    )
}
