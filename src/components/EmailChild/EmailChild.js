import React from 'react';
import trash from '../../logos/trash-2 9.png'

const EmailChild = ({data,handleDelete}) => {
    return (
        <tr className="justify-content-start">
            
            
    <td style={{tableLayout:'none'}} border="0" className="bg-light" >{data.name}</td>
    <td className="bg-light">{data.email}</td>
    <td className="bg-light">{data.date}</td>
    <td className="bg-light">{data.data}</td>
    <td className="bg-light" style={{cursor:'pointer'}} onClick={()=>handleDelete(data._id) }><img src={trash} style={{ width:'20px',backgroundColor:'red'}}/></td>
    </tr>
            
        
    );
};

export default EmailChild;