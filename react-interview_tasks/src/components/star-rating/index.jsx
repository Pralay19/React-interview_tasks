import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './styles.css'

function StarRating({stars=10}){
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

function handleClick(curId){
    setRating(curId)

}
function handleEnter(curId){
    setHover(curId)
}
function handleLeave(curId){
    setHover(curId)
}


    return (
        <div className="star-rating"
        style={{
            display:'flex',
            justifyContent:'center'
        }}
        >
            {
                [...Array(stars)].map((_,index)=>{
                    index+=1
                    return <FaStar
                    key={index}
                    className={index<=(hover||rating)?'active':'inactive'}
                    onClick={()=>{handleClick(index)}}
                    onMouseMove={()=>{handleEnter(index)}}
                    onMouseLeave={()=>{handleLeave(index)}}
                    size={40}
                    />
                })
            }
        </div>
    )
}



export default StarRating;