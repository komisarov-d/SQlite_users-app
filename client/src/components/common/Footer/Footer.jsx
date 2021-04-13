import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer__list container'>
         <li><NavLink className='link' to={'/'}>AppCo</NavLink></li>
         <li>All rights reserved by ThemeTags</li>
         <li>Copyrights © 2019.</li>
      </ul>
    </div>
  );
}

