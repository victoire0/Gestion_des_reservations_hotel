import { useState, useEffect } from 'react';
import './Home.css';
<link rel="stylesheet" href="https://use.typekit.net/ach4ebp.css"></link>

const Home = () => {
  const [showBookNow, setShowBookNow] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
 

  

  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollPosition = window.scrollY;
  
      if (currentScrollPosition > lastScrollPosition) {
        setShowBookNow(false);
      } else {
        setShowBookNow(true);
      }
  
      setLastScrollPosition(currentScrollPosition);
    };
    window.addEventListener('scroll', handleScrollDirection);

    return () => {
      window.removeEventListener('scroll', handleScrollDirection);
    };
  }, [lastScrollPosition]);

  return (
    <>
      <div className="main">
        <div className="bodybg">
          <div className='wlc'>
            <p id='wlcmontserate'>Welcome to</p><br />
            <h1 className='nomttl'>NUEVA</h1>
            <h3>HOTELS</h3><br />
            <p className='description-text' id='stlmontserate'>
              Book your stay and enjoy Luxury <br />
              redefined at the most affordable rates.
            </p>

            {showBookNow && (
              <div>
                <button className='Booknow'></button>
              </div>
            )}
          </div>
        </div>
        <div className='para'>
          <p>
          All our room types are including complementary breakfast
        </p>
          </div>

        <div className="content-wrapper">
          <div className="text-section"><br />
            <h1 className="luxury-title">Nueva redefined</h1>
            <p className="description-text">
              Our rooms are designed to transport <br />
              you into an environment made for leisure. <br />
              Take your mind off the day-to-day of home <br />
              life and find a private paradise for yourself.
            </p>
            <button className="explore-button">EXPLORE</button><br />
          </div>

          <div className="rectparent">
            <img src="/src/assets/homeImg1.png" alt="" className="img1" />
          </div>
          <div className="rectparent1">
            <img src="/src/assets/homeImg2.png" alt="" className="img1" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
