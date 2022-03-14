import React from 'react'
import {FcInfo} from 'react-icons/fc'
import PaymentMethod from './pages/PaymentMethod'
import PropTypes from 'prop-types'
import Shippinginfo from './pages/Shippinginfo'
import {BrowserRouter as Router , Route ,Routes} from  'react-router-dom'
import CardDetails from './PaymentComponents/CardDetails'
import GPAY from './PaymentComponents/GPAY'
import UPI from './PaymentComponents/UPI'
import GiftCard from './PaymentComponents/GiftCard'
import Netbanking from './PaymentComponents/Netbanking'
import COD from './PaymentComponents/COD'

const PaymentType = ({title})=> {
  return (
  // <Router >
    <div className='container-fluid checkout-pay'>
      {/* <div className='row no-gutters'> */}
       <div class="alert alert-info " role="alert">
          <i className='info-icon  '><FcInfo /></i>
              <span >Please use a digital payment method &amp; help us ensure contactless delivery for your safety </span>
        </div>
        <div className='nav-heading '>
          {title} 
          </div>
         <div className=' payment-option'>
          <span className='pay-detail'>
            <PaymentMethod />
            <Routes>
              <Route path='/card' element={<CardDetails />} />
              <Route path='/upi' element={<UPI />} />
              <Route path='/gpay' element={<GPAY />} />
              <Route path='/gift-card' element={<GiftCard />} />
              <Route path='/bank' element={<Netbanking />} />
              <Route path='/cod' element={<COD />} />
            </Routes>
         <Shippinginfo />          
          </span>
          
         </div>
      {/* </div> */}
    </div>
    // </Router>
  )
}
PaymentType.defaultProps= {
  title: "CHOOSE YOUR PAYMENT OPTION"
}
PaymentType.propTypes ={
  title: PropTypes.string,
}
export default PaymentType