import React, { useState } from 'react'
import { useEffect } from 'react';

const UseRestaurantMenu = (resid)=> {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchdata();
    }, [])

    const fetchdata = async()=>{
        const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+ resid+"&catalog_qa=undefined&submitAction=ENTER";
        const data = await fetch(url);
        const json=await data.json();
        console.log(json.data)
        setResInfo(json.data);
    }

    return resInfo;
}

export default UseRestaurantMenu;
