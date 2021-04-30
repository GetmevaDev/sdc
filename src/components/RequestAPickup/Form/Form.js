import React, { useEffect, useState } from "react"
import {graphql, useStaticQuery} from "gatsby"
import Arrow from "../../../images/Arrow 1.svg"
import Image1 from "../../../images/success.svg"
import Image2 from "../../../images/success2.svg"
import classes from "./form.module.scss"



export function Form (){

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [date, setDate] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [addressDirty, setAddressDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [pickupDirty, setPickupDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);

  const [nameError, setNameError] = useState(true);
  const [addressError, setAddressError] = useState(true);
  const [phoneError, setPhoneError] = useState(true);
  const [pickupError, setPickupError] = useState(true);
  const [dateError, setDateError] = useState(true);

  const [formValid, setFormValid] = useState(false);


const blurHandler = (e) => {
  switch (e.target.name){
    case 'OfficeName':
      setNameDirty(true)
      break
    case 'Address':
      setAddressDirty(true)
      break
    case 'PhoneNumber':
      setPhoneDirty(true)
      break
    case 'PickupDetails':
      setPickupDirty(true)
      break
    case 'RequestedDate&Time':
      setDateDirty(true)
      break
  }
}

const nameHandler = (e) =>{
  setName(e.target.value);
    if (e.target.value.length !== 0){
      setNameError(false);
    }else{
      setNameError(true);
    }
}

  const addressHandler = (e) =>{
    setAddress(e.target.value);
    if (e.target.value.length !== 0){
      setAddressError(false);
    }else{
      setAddressError(true);
    }
  }


  const phoneHandler = (e) =>{
    setPhone(e.target.value);
    if (e.target.value.length !== 0){
      setPhoneError(false);
    }else{
      setPhoneError(true);
    }
  }

  const pickupHandler = (e) =>{
    setPickup(e.target.value);
    if (e.target.value.length !== 0){
      setPickupError(false);
    }else{
      setPickupError(true);
    }
  }

  const dateHandler = (e) =>{
    setDate(e.target.value);
    if (e.target.value.length !== 0){
      setDateError(false);
    }else{
      setDateError(true);
    }
  }



  useEffect(() =>{
    if (
      nameError ||
      addressError ||
      phoneError ||
      pickupError ||
      dateError
    ){
      setFormValid(false);
    }else{
      setFormValid(true);
    }
  },[
    nameError,
    addressError,
    phoneError,
    pickupError,
    dateError,
  ])

  const data = useStaticQuery(graphql`
      {
          strapiRequestAPickup {
              Title_Section_Form
          }
      }
  `)
  return(
    <section>
      <div className="container">
          <h2 className={classes.title}>{data.strapiRequestAPickup.Title_Section_Form}</h2>

        <form className={classes.form}>
          <div className={`row ${classes.flexStyles}`}>

            <div className={classes.formGroup}>
              <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} style={{
                borderColor: nameDirty && nameError ? '#CB0000' : '#787D88',
              }} placeholder={`Office Name`} type="text" className="form-control" name="OfficeName" />
            </div>

            <div className={classes.formGroup}>
              <input onChange={e => addressHandler(e)} value={address} onBlur={e => blurHandler(e)} style={{
                borderColor: addressDirty && addressError ? '#CB0000' : '#787D88',
              }}  placeholder={`Address`} type="text" className="form-control" name="Address" />
            </div>

            <div className={classes.formGroup}>
              <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} style={{
                borderColor: phoneDirty && phoneError ? '#CB0000' : '#787D88',
              }}  placeholder={`Phone Number`} type="tel" className="form-control" name="PhoneNumber" />
            </div>

            <div className={classes.formGroup}>
              <input onChange={e => pickupHandler(e)} value={pickup} onBlur={e => blurHandler(e)} style={{
                borderColor: pickupDirty && pickupError ? '#CB0000' : '#787D88',
              }}  placeholder={`Pickup Details`} type="text" className="form-control" name="PickupDetails" />
            </div>

            <div className={classes.formGroup}>
              <input onChange={e => dateHandler(e)} value={date} onBlur={e => blurHandler(e)} style={{
                borderColor: dateDirty && dateError ? '#CB0000' : '#787D88',
              }}  placeholder={`Requested Date & Time`} type="datetime-local" className={classes.formDate} name="RequestedDate&Time" />
            </div>

          </div>
          <button disabled={!formValid} className={classes.buttonSubmit} type={`submit`}>Send<img src={Arrow} alt="" /></button>
          {nameDirty ||
            addressDirty ||
            phoneDirty ||
            pickupDirty ||
            dateDirty ? <div className={`row ${classes.blockWarning}`}>
            <div>
              {
                nameError ||
                addressError ||
                phoneError ||
                pickupError ||
                dateError ? <img src={Image2} alt="" /> :
                  <img src={Image1} alt="" />
              }
            </div>
            <p className={classes.warning}> Thank you for your request! A customer service representative will be in touch shortly to confirm the pickup. </p>
          </div> : null
          }


        </form>
      </div>
    </section>
  )
}