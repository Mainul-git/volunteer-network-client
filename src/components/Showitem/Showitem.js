import React from 'react';

const Showitem = ({datas,handleDelete}) => {

  
 

    return (
        <div className="col-md-6 bg-light">
            
          <div className="row"></div> <div className='col-md-6'> <img src={datas.image} style={{height:'200px'}} alt=""/></div>
          <div className='col-md-6'>
          <h1>{datas.data}</h1>
    <p>Date:{datas.date}</p>
    <button className= "btn btn-primary m-auto"onClick={()=>handleDelete(datas._id)}>delete</button>
          </div>
 
   
        </div>
    );
};

export default Showitem;