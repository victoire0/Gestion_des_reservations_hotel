import { useState, useEffect } from 'react';
import './RoomsPage.css';
import RoomSlide from './RoomSlide';

const RoomsPage = () => {
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
      <div className="mainroom">
        <div className='bodybgroom'>
          <div className='wlcbr'>
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

    <div className='contenairttlbody'>
      <h1 className='randr'>ROOMS AND RATES</h1>
      <p className='description-text2' id='stlmontserate2'>
      Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,<br /> comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented <br /> by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
      </p>
    </div><br />
    
  <div className="singleroom">
  <RoomSlide 
    images={[
      "/src/assets/bedroomBg.png",
      "/src/assets/sigleroomimg.png",
      "/src/assets/sigleroomimg1.png",
      "/src/assets/singleroomimg4.jpg"
    ]}
  />
  <div>
    <div>
      <button className="vroomdetails"></button>
    </div>
    <p className="vroomdetailsttl">VIEW ROOM DETAILS</p>
  </div>
  <div>
    <button className="avg">
      <p className="avgttl">$... Arg/night</p>
    </button>
  </div>
  <div className="singleroomttl">
    <h1>SINGLE ROOM</h1>
  </div>
</div>
<br />


    <div className='doubleroom'>
      <div className='doubleroomimg'>
          <img src="/src/assets/homeImg1.png" alt="" className="imgroom2" />
      </div>
      <div>
        <div>
          <button className='vdoubleroomdetails'></button>
       </div>
        <p className='vdoubleroomdetailsttl'>VIEW ROOM DETAILS</p>
      </div>
      <div >
        <button className='avg'><p className='avgttl'>$... Arg/night</p></button>
      </div>
      <div className='doubleroomttl'>
        <h1>DOUBLE ROOM</h1>
      </div>

    </div><br />


    <div className='twinroom'>
    <div className='twinroomimg'>
          <img src="/src/assets/twinroomimg.png" alt="" className="imgroom3" />
      </div>
      <div>
        <div>
          <button className='vtwinroomdetails'></button>
       </div>
        <p className='vtwinroomdetailsttl'>VIEW ROOM DETAILS</p>
      </div>
      <div >
        <button className='avg'><p className='avgttl'>$... Arg/night</p></button>
      </div>
      <div className='twinroomttl'>
        <h1>TWIN ROOM</h1>
      </div>
    </div>

      </div>
    </>
  );
};

export default RoomsPage;
