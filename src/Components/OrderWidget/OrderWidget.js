import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderWidget()  {
    return ( <Link to="/orders" >
      <i className="fas fa-file-alt    "></i>
    </Link> );
}
 
