import {NavLink} from 'react-router-dom'

export const  MHeader = () => {
  return (
    <header className='mheader'>
      <div className="container">
          <h2 className='mheader__title'>AppCo</h2>
        <div>
          <div className='mheader__block'>
            <h2><b>Brainstorming</b> for desired perfect Usability</h2>
            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            <NavLink to={'/users'}>Views Stats</NavLink>
          </div>
          <div className='mheader__phone'>
            <div></div>
           
          </div>
        </div>
      </div>
    </header>
  );
}

