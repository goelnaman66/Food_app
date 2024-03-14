import { Link } from 'react-router-dom';



// Card Component 
const Card = ({resname, cuisines, rating, waitingtime, resimgid, cost, resid}) => {
    return (
        <>
            
            <div className="w-52 h-88 m-2.5 bg-gray-100 flex flex-col items-center rounded-lg hover:border hover:border-gray-100 hover:cursor-pointer">
                <div className='mt-0 rounded-10'>
                    <img className="h-32 w-52" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resimgid} alt="" />
                </div>
                <div className='flex flex-col flex-wrap justify-center items-center'>
                <Link to={"/restaurant/"+resid}>
                    <h4 className=' mx-5 my-3 text-base font-bold'>{resname}</h4>
                    </Link>
                    <center><p className='mx-2.5 mb-3 mt-3 text-xs'>{cuisines}</p></center>
                    <p className=' mx-2.5 mb-3 text-green-500 text-xs'><b>{rating} stars</b></p>
                    <p className='mx-2.5 mb-3 text-xs'>{waitingtime}</p>
                    <p className='mx-2.5 mb-3 text-xs text-red-500'>{cost}</p>
                </div>
                
            </div>
        
        </>
    )
}

export default Card;