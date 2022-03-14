import React from 'react'
import PropTypes from 'prop-types'
const GPAY =({mobnumber}) => {
  return (
    <div className='pay-detail-container'>
        <div className='card-container'>
          {/* {title} */}
          <div className='card-title'>
            GOOGLE PAY
          </div>
         <div className='card-content-container'>
            <form>
              <div className='credit-card-number'>
              <h5 className='gpay-head'>Enter Mobile Number /GooglePay UPI id</h5>
                <input type='text' placeholder="xxxxxx1234" pattern='[0-9]{10}' required>{mobnumber}</input>
              </div>
              <div className='expiry-detail'>
                <div className='submit-btn'>
                  <button type='submit'>send payment request </button>
                </div>
              </div>
  
            </form>
          </div>
        </div>
      </div>
  )
}
GPAY.defaultProptypes={
  mobnumber: 'xxxxxx123'
}
GPAY.propTypes={
mobnumber: PropTypes.number
}
export default GPAY