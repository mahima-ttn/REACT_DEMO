import React from 'react'
import {Link} from 'react-router-dom'

const PaymentMethod =() => {
  return (
    <div className='container-fluid payment-method'>
       <div className='payment-list'>
         <div className='sub-card'>
           <Link to='/card'>Credit /Debit Card</Link></div>
         <div className='sub-card'>
           <Link to='/upi'>UPI</Link></div>
         <div className='sub-card'>
         <Link to='/gpay'>Google Pay</Link></div>
         <div className='sub-card'>
         <Link to='/bank'>Net Banking</Link></div>
         <div className='sub-card'>
         <Link to='/cod'>Cash On Delivery</Link></div>
         <div className='sub-card'>
         <Link to='/gift-card'>Gift Card</Link></div>
       </div>
    </div>
  )
}

export default PaymentMethod