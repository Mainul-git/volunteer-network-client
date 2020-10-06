import React from 'react';
import trash from '../../logos/trash-2 9.png'

const EmailChild = ({data,handleDelete}) => {
    return (
        <div className="row">
            <div className="col-md-2">
            
    <p>{data.name}</p>
    <p>{data.email}</p>
    <p>{data.date}</p>
    <p>{data.data}</p>
    <p style={{cursor:'pointer'}} onClick={()=>handleDelete(data._id) }><img src={trash} style={{ width:'20px',backgroundColor:'red'}}/></p>
    </div>
            
        </div>
    );
};

export default EmailChild;