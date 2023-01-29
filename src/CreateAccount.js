import React from "react";
import "./CreateAccount.css";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";


export default function CreateAccount() {
  
  const {register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleSubmitParams = (data) => {
    console.log(data);
  }

  return (
    <div className="create-account-section">
      <img src="images/create-account-image.png" alt="" />
      <div className="create-account-form">
        <div className="headline-subhead" id="create-account-headline-subhead">
          <div className="headline">
            <h3>Create Account</h3>
          </div>
          <div className="subhead">
            <p>
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSubmitParams)}>
          <div className="typeform">
            <div className="registration-username-icon">
              <input type="text" placeholder="Username" {...register("username")}/>
              <AiOutlineUser/>
            </div>
            <div className="registration-email icon">
              <input type="email" placeholder="Email Address" {...register('email')}/>
              <AiOutlineMail/>
            </div>
            <div className="registration-password-icon">
              <input type="password" placeholder="Password" {...register('password')}/>
              <RiLockPasswordLine/>
            </div>
            <div className="registration-confirmPassrowd-icon">
              <input type="password" placeholder="Confirm Password" {...register('confirmPassword')}/>
              <RiLockPasswordLine/>
            </div>
          </div>
          <button>Create account</button>
        </form>
      </div>
    </div>
  );
}
