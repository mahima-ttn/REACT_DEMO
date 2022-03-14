import React from 'react'


const GiftCard = () => {
  return (
    <div className=' pay-detail-container'>
      <div className='card-container'>
        {/*Title of payment section */}
        <div className='card-title'>
        Reedem Gift Card
        </div>
        {/*form / input section*/}
        <div className='card-content-container'>
          <form>
            <div className='credit-card-number'>
              <input type='tel' placeholder="Gift Card Number" pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}' required></input>
            </div>
            <div className='gift-card-pin'>
              <input type='tel' placeholder="PIN" pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}' required></input>
            </div>
            <div className='expiry-detail'>
              <div className='submit-btn '>
                <button type='submit'>Submit </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default GiftCard