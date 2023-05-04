import React from 'react'
import './Social.scss'
import {ImFacebook, ImTwitter, ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

export default function Social() {
  return (
    <div className='social'>
        <ul className="socialBtns">
            <li className='socialBtn'>
              <a href="mailto:rajiabdullahi907@gmail.com"><AiOutlineMail /></a>
            </li>
            <li className='socialBtn'>
              <a href="https://web.facebook.com/akin.raji"><ImFacebook /></a>
            </li>

            <li className='socialBtn'>
              <a href="https://www.instagram.com/a.rajiabdullahi/"><BsInstagram/></a>
            </li>

            <li className='socialBtn'>
              <a href="https://twitter.com/alAmeer170"><ImTwitter /></a>
            </li>

            <li className='socialBtn'>
              <a href="https://wa.link/jyty4h"><ImWhatsapp /></a>
            </li>
        </ul>

    </div>
  )
}
