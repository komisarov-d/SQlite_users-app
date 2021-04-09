import {MHeader} from './particials/MHeader'
import {MFooter} from './particials/MFooter'

function MainPage() {
  return (
     <div className='main'>
        <MHeader/>
          <main className={['container', 'content'].join(' ')}>
            <h2>Why <b>small business owners love</b> AppCo?</h2>
            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            <div className='content__iconsBlock'>
                <div>
                  <div>
                    <i className='content__icon1'/>
                  </div>
                  <h3>Clean Design</h3>
                  <p>Increase sales by showing true dynamics of your website.</p>
            </div>
          <div>
          <div>
                <i className='content__icon2'/>
                </div>
                <h3>Secure Data</h3>
                <p>Build your online store’s trust using Social Proof & Urgency.</p>
          </div>
          <div>
            <div>
                <i className='content__icon3'/>
            </div>
              <h3>Retina Ready</h3>
              <p>Realize importance of social proof in customer’s purchase decision.</p>
            </div>
          </div>
        </main>
      <MFooter/>
    </div>
  );
}

export default MainPage;