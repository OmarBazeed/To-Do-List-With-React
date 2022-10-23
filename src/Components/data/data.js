import React from "react";
import './data.css'

const Data = (props) => {

    const {items,remove} = props;
    let finalItems;

    if(items.length === 0){
        finalItems = <p className="no-task">"There Is No Tasks To Show"</p>;
    }else{
        finalItems = items.map((el)=>{
            return (
                <div className="show-data" key={Math.floor(Math.random()*1000)} id={el.id}>
                        <span >{el.name} </span>
                        <span >{el.age} </span>
                        <span onClick={()=> remove(el.id)} className="delete"> X </span>
                </div>
            )
        })
    }


    return ( 
    <>
        {finalItems}
    </>
    )

}

export default Data;


