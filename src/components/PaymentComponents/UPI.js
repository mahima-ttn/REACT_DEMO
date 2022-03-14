import React from 'react'

const UPI =({title})=> {
    return (
      <div className='pay-detail-container'>
        <div className='card-container'>
          {title}
          <div className='card-title'>
            BHIM UPI
          </div>
         <div className='card-content-container'>
            <form>
              <div className='credit-card-number'>
                {/* <p>Enter UPI Id</p> */}
                <input type='text' placeholder="VPA/UPI ID ( eg. 9876543210@okupi ) VPA" pattern='[0-9]{10}@upi' required></input>
              </div>
              <div className='expiry-detail'>
                <div className='submit-btn'>
                  <button type='submit'>PAY NOW </button>
                </div>
              </div>
  
            </form>
          </div>
        </div>
      </div>
    )
  }
  // UPI.defaultprops= {
  //   title: 'BHIM UPI'
  // }
  // UPI.proptype={
  //   title:PropType.string,
  // }
  export default UPI