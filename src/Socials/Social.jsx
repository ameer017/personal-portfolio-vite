import React from 'react'
import './Social.scss'
import {ImFacebook, ImTwitter, ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const items = [
  
  {
    icon: <ImFacebook />,
    link: 'https://web.facebook.com/akin.raji'
  },
  {
    icon: <BsInstagram />,
    link: 'https://www.instagram.com/a.rajiabdullahi'
  },
  {
    icon: <ImTwitter />,
    link: 'https://twitter.com/alAmeer170'
  },
  {
    icon: <ImWhatsapp />,
    link: 'https://wa.link/jyty4h'
  },
  
]
export default function Social() {


  return (
    <>
        <div className='social'>
          <ul className="socialBtns">
            {items.map(({icon, link}) => (
              <a href={link}>
                <li className='socialBtn'>{icon}</li>
              </a>
            ))}
          </ul>
        </div>
      
    </>
    
  )
}
