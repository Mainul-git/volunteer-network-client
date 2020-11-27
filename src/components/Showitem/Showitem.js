import React from 'react';

const Showitem = ({datas,handleDelete}) => {

  
 

    return (
        <div className="col-5 mb-2 mt-2 ml-5  row bg-light">
            
         <div className='col-4'> <img src={datas.image} style={{height:'200px'}} alt=""/></div>
          <div className='col-8'>
          <h1>{datas.data}</h1>
    <p>Date:{datas.date}</p>
    <button className= "btn btn-primary m-auto"onClick={()=>handleDelete(datas._id)}>delete</button>
          </div>
 
   
        </div>
    );
};

export default Showitem;