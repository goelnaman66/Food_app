import Card from './card';
import Shimmer from './shimmer';


// Card Container Component importing the Restaurant Data as Prop
const CardContainer = ({data}) => {
   
    return (
        <div className='flex flex-wrap justify-around'>
            {
                data.map((res)=>{
                    return (
                        <Card key={res["info"].id} resname={res["info"].name} cuisines={res["info"].cuisines.join(", ")} rating={res["info"].avgRating} waitingtime={res["info"].sla.slaString} resimgid={res["info"].cloudinaryImageId} cost={res["info"].costForTwo} resid={res["info"].id}/>
            )})}
        </div>
    )
}

export default CardContainer;