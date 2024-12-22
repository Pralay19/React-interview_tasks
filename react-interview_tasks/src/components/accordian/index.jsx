import { useState } from "react";
import data from './data';
import './styles.css'

function Accordian(){
    const [selected,setSelected]=useState(null);
    const [selectall,setSelectall]=useState(false);

function handleSingleSelection(currentItemid){
    console.log(currentItemid);
    if(currentItemid===selected){
        setSelected(null);
    } 
    else {
        setSelected(currentItemid);}
}
function handleSeeAll(){
    setSelectall(!selectall);
}    

    return <div className="wrapper">
        <button className="seeall" onClick={handleSeeAll}>See All</button>
        <div className="accordian">
            {
                data && data.length>0?
                data.map(dataItem=> <div className="item">
                    <div className="title" onClick={()=>handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    <div>
                        {
                            (selectall ||selected===dataItem.id)?
                            <div className="content">
                                {dataItem.answer}
                            </div>
                            :
                            null
                        }
                    </div>
                </div>)
                :
                <div>Data Not Found!</div>
            }
        </div>
    </div>
}

export default Accordian;