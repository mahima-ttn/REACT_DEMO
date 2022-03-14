import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

const COD = () => {
  return (
    <div className='pay-detail-container'>
      <div className='card-container'>
        <div className='card-title'>
          Cash On Delivery
        </div>
        <div className='expiry-detail'>
                <div className='submit-btn'>
                  <button type='submit'>Pay By Cash <IoIosArrowForward /> </button>
                </div>
              </div>
      </div>
    </div>
  )
}

export default COD