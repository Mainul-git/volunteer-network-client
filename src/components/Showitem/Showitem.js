import React from 'react';

const Showitem = ({datas,handleDelete}) => {

  
 

    return (
        <div>
            
            <img src={datas.image} style={{height:'200px'}} alt=""/>
            <h1>{datas.data}</h1>
    <p>Date:{datas.date}</p>
    <button className= "btn btn-primary"onClick={()=>handleDelete(datas._id)}>delete</button>
        </div>
    );
};

export default Showitem;