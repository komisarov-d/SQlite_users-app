export const MFooter = () =>  {
  return (
    <footer className='mfooter'>
      <div className="container">
       <div className='mfooter__form'>
          <input type="text" placeholder='Enter your email'/>
          <a href='!#'>Subscribe</a>
       </div>
      <ul className='mfooter__list'>
         <li className='title'><a href='!#'>AppCo</a></li>
         <li>All rights reserved by ThemeTags</li>
         <li>Copyrights © 2019.</li>
      </ul>
      </div>
    </footer>
  );
}
