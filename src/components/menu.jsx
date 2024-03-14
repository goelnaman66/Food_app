import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';



function Menu() {
    const {resid}=useParams();

    
    
    
    // method 1: useEffect Hook
    // API Call --> fetch data logic using useEffect
    /*
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async()=>{
        const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+ resid+"&catalog_qa=undefined&submitAction=ENTER";
        //console.log(url);
        const data = await fetch(url);
        const json=await data.json();
        setResInfo(json.data);
        
    };
    //console.log(resInfo);
    */
   
   
    // method 2: Custom Hooks
    const resInfo = useRestaurantMenu(resid);
    //console.log(resInfo);



    if(resInfo===null) return (<Shimmer/>);

    const {name, cuisines, costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
    //console.log(name, cuisines, costForTwoMessage);
    //console.log(itemCards);

    return (
        <div className='m-5 flex flex-col justify-center items-center'>
            <h1 className='text-4xl my-5 font-extrabold'>{name}</h1>
            <p className='text-red-500 my-2'>{costForTwoMessage}</p>
            <p className='text-base text-green-500 my-2'>{cuisines.join(", ")}</p>
            <h2 className='text-2xl font-bold'>Menu</h2>
            <ul>
                {itemCards.map((c)=>{
                    return ( <li  key={c.card.info.id}>
                        <div className="flex justify-between flex-wrap w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-2">
                        <img className="h-20 w-20 mx-2 rounded-r-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+c.card.info.imageId} alt="" />
                        <div className='flex flex-col justify-end items-end'>
                            <h2 className='font-bold text-sm my-3'>{c.card.info.name}</h2>
                            <p className='text-sm'>{c.card.info.isVeg?"🟩 Veg":"🟥 Non-Veg"}</p>
                            <p className='text-sm font-bold'>INR : {c.card.info.price/100}</p>
                        </div>
                        </div>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default Menu;
