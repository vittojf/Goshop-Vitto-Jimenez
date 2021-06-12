import React from 'react';
import { useCartContx } from '../../context/cartContext';

import '../../styles/alert/alert.css'
const Alert = ({title}) => {

    const { alertShow } = useCartContx();
    return ( <React.Fragment>

        <div className={alertShow?'alert-show alert':'alert'}>
            <div>

            {title}
            </div>
        </div>
      
    </React.Fragment> );
}
 
export default Alert;