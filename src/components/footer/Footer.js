import React from 'react'
import "./Footer.css"
import {AiFillApple, AiOutlineInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
import {BsGooglePlay, BsTelegram} from "react-icons/bs"

function Footer() {
  return (
    <>
    <div className='footer container'>
      <div className="wrapper">
        <div className="wrap">
          <h4>Biz haqimizda</h4>
          <h5>Topshirish punktlari</h5>
          <h5>Vakansiyalar</h5>
        </div>
        <div className="wrap">
          <h4>Foydalanuvchilarga</h4>
          <h5>Biz bilan bogʻlanish</h5>
          <h5>Savol-Javob</h5>
        </div>
        <div className="wrap">
          <h4>Tadbirkorlarga</h4>
          <h5>Uzumda soting</h5>
          <h5>Sotuvchi kabinetiga kirish</h5>
        </div>
        <div className="wrap">
          <h4>Ilovani yuklab olish</h4>
          <div className="icons">
            <span>
              <span><AiFillApple/></span>
              <h6>AppStore</h6>
            </span>
            <span>
              <span><BsGooglePlay/></span>
              <h6>Google Play</h6>
            </span>
          </div>
          <h4>Uzum ijtimoiy tarmoqlarda</h4>
          <div className="local__icons">
            <span>
              <AiOutlineInstagram/>
            </span>
            <span>
              <BsTelegram/>
            </span>
            <span>
              <AiFillYoutube/>
            </span>
            <span>
              <AiFillFacebook/>
            </span>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div className="footer__bottom container">
      <h4>Maxfiylik kelishuvi Foydalanuvchi kelishuvi</h4>
      <h6>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</h6>
    </div>
    <br />
    </>
  )
}

export default Footer