import React from 'react'
import { GoCreditCard } from 'react-icons/go';
import {IoIosArrowForward} from 'react-icons/io'

const CardDetails =()=> {
  return (
    <div className=' pay-detail-container'>
      <div className='card-container'>
        {/*Title of payment section */}
        <div className='card-title'>
          Credit/Debit Card
        </div>
        {/*form / input section*/}
        <div className='card-content-container'>
          <form>
            <div className='credit-card-number'>
              <input type='tel' placeholder="Card Number" pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}' required></input>
            </div>
            <div className='expiry-detail'>
              <div className='expiry-title'>
                expiry
              </div>
              <div className='expiry-content'>
                  <div className='expiry-month'>
                       <input type='text' placeholder="YYYY/MM"  required></input>
                  </div>
                  <div className='expiry-cvv'>
                       <input type='number' placeholder='CVV'></input>
                  </div>
                  <div className='expiry-content'>
                    <div className='expiry-icon'>
                      <GoCreditCard/>
                    </div>
                    <div className='expiry-info'>
                    last 3 digits at the back of the card
                    </div>

                  </div>
              </div>
              <div className='checkbox-section'>
                <input type="checkbox" id="check-box" name="check" />
                &nbsp; save this card for future
              </div>
              <div className='submit-btn'>
                <button type='submit'>PAY NOW <IoIosArrowForward /></button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default CardDetails