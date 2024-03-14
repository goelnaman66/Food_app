import Card from './card';
import data from '../assets/data/data.json'
import CardContainer from './card-container';
import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = ()=> {

    const [resList, setResList] = useState([]);  // change this to [] to avoid static data.
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchtext] = useState("");
    const onlineStatus = useOnlineStatus();


    useEffect(()=>{fetchData()}, []);
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //Optional Chaining
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    // Event Handler Function to handle Top Rated restaurants Button
    // If using arrow function with {} then use return, otherwise simply use statement.
    const handleTopRatedButton = () => {
        let newList = filteredResList.filter((res)=>{
            return res["info"].avgRating>=4.5
        })
        setFilteredResList(newList);
    }
    //Shimmer UI
    if(filteredResList.length==0){
        return (
            <div className='flex flex-wrap justify-center'>
                <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/>
            </div>
        )
    }

    
    if(onlineStatus==false) return (<h1>Looks like you are offline.</h1>)
    console.log(onlineStatus);

    //UI
    return (
        <>
            <div className="body">
                <div className="p-2 flex justify-center">

                    <div className='w-3/5'>
                        <input type="text" className='-me-0.5 rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary w-4/5 mr-5'value={searchText} onChange={(e)=>{
                            setSearchtext(e.target.value)
                        }}/>

                        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={()=>{
                        const filterRes=resList.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())

                        })
                            console.log(filterRes)
                            setFilteredResList(filterRes)
                        }}>Search</button>
                    </div>

                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={handleTopRatedButton}>Top Rated Restaurants</button>
                </div>
                <div>
                    <CardContainer data={filteredResList}/>

                </div>
            </div>
        </>
    )
}

export default Body;