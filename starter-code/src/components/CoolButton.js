import React from 'react';


const CoolButton=({Class, Name})=>{
    return (
        <div> 
            <button className={Class}>{Name}</button>
        </div> 
    )
}


export default CoolButton