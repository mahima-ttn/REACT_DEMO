import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Login from './pages/Login'
import Address from './pages/Address'
import Payment from './pages/Payment'
import PropTypes from 'prop-types'

const Header =({title}) => {
  return (
    <div className='container-fluid checkout-header'>
        <div className='col-md-12'>
            {/* <div className='row no-gutters'> */}
                <div className='brand-logo'>
                    <div className='col-md-4 logo'>{title} <FaShoppingCart /> </div>
                </div>
                <div className=' col-md-2 checkout-list'>
                <Login />
                </div>
                <div className='col-md-2 checkout-list'> 
                <Address />
                </div>
                <div className='col-md-2 checkout-list'>
                <Payment />
            </div>
            {/* </div> */}
        </div>
    </div>
  )
}
Header.defaultProps= {
  title: "SHOPCARTE"
}
Header.prototype ={
  title: PropTypes.string,
}
export default Header