import React from 'react'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa6";
export default function RecipeItems() {

  const allRecipes = useLoaderData()
  console.log(allRecipes)
  return (
    <>
        <div className='card-container'>
            {
                allRecipes?.map((item, index) => {
                    return (
                        <div key={index} className='card'>
                            <img src={foodImg} width="120px" height="100px"></img>
                            <div className='card-body'>
                                <div className='title'>{item.title}</div>
                                <div className='icons'>
                                    <div className='timer'><BsStopwatchFill />{item.time}</div>
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