import React from 'react';
import './SubscribeWidget.css';
import {FiMail} from 'react-icons/fi';
import { useForm } from 'react-hook-form';

export default function SubscribeWidget() {
  const {handleSubmit, register} = useForm();

  const handleFormSubmitParam = (data) => {
    console.log(data);
  }

  return (
    <div className='subscribe-widget'>
      <div className="subscribe-widget-frame">
        <img src="images/subscribe-widget-image1.png" alt="" />
        <div className="frame-179">
          <div className="headline-subhead">
            <h4>Join our weekly digest</h4>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
          </div>
          <div className="subscribe-widget-mobile">
            <form onSubmit={handleSubmit(handleFormSubmitParam)}>
              <input type="email" placeholder='Enter Your Email Address' {...register('email')}/>
              <button type='submit'>
                <FiMail size={'20px'}/>
                <p>Subscribe</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
