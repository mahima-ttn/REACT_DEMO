import React from 'react'
import {FaProductHunt ,FaShippingFast } from 'react-icons/fa'
import {RiSecurePaymentFill} from 'react-icons/ri'


const Footer = () => {
  return (
    <div className='container-fluid checkout-footer'>
        <div className='row no-gutters w-100'>
            <div className='foot-column'>
         <div className='col-md-3 '>
             <i className='icon'>
             <FaProductHunt /> </i>
         <div className='desc'>
             <h3 className='desc-heading'>GENUINE PRODUCTS</h3>
             <p className='desc-foot'>Sourced Directly From Brands</p>
         </div>
         </div>
         <div className='col-md-3 '>
             <i className='icon'><FaShippingFast /></i>
             <div className='desc'>
             <h3 className='desc-heading'>FREE SHIPPING</h3>
             <p className='desc-foot'>For Orders Above rs "599"</p>
         </div>
         </div>
         <div className='col-md-3 '>
             <i className='icon'><RiSecurePaymentFill /></i>
             <div className='desc'>
             <h3 className='desc-heading'>SECURE PAYMENTS</h3>
             <p className='desc-foot'>Using 128-bit SSL Encryption</p>
         </div>
         </div>
         </div>
     </div>
    </div>
  )
}

export default Footer