import "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}

      <main className="contact-main">
        <div className="contact-info"><br /><br /><br />
          <h2 className="ttl">WE ARE HERE FOR YOU</h2><br />
          <p className="paragra">
            At Nueva Hotels, we take our customers seriously. Do you have any
            enquiries, complaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
          <div className="location">
          <p>
            <strong>10 Kigunga Rd. Kigobe, Bujumbura</strong>
          </p>
          <a href="#" className="view-map">View map →</a>
          <p>
            <strong>Phone:</strong> +243 993 522 958 <br />
            <strong>Email:</strong> nueva_hotels@gmail.com
          </p>
          </div>
        </div>
        <div className="contact-form">
          <form><br /><br />
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
            
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message"></textarea>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </main>


      <footer className="contact-footer">
        <div className="footer-info">
          <p>
          10 Kigunga Rd. Kigobe, Bujumbura<br />
          +243 993 522 958<br />
            nueva_hotels@gmail.com
          </p>
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
