

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaViber,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function ContactContainer() {
  const contacts = [
    {
      city: "Tbilisi, Georgia",
      map: "https://www.google.com/maps?q=Tbilisi&output=embed",
    },
    {
      city: "Batumi, Georgia",
      map: "https://www.google.com/maps?q=Batumi&output=embed",
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-wrapper">
          {contacts.map((item, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-top">
                <div>
                  <p className="address">
                    Head Office, Street Name #13
                    <br />
                    {item.city}
                  </p>
                </div>

                <span className="working-hours">10:00-18:00</span>
              </div>

              <div className="contact-info">
                <div className="info-row">
                  <div className="icon blue">
                    <FaPhoneAlt />
                  </div>

                  <span>+995 55 55 55 55</span>
                </div>

                <div className="info-row">
                  <div className="icon green">
                    <FaWhatsapp />
                  </div>

                  <span>+995 55 55 55 55</span>
                </div>

                <div className="info-row">
                  <div className="icon purple">
                    <FaViber />
                  </div>

                  <span>+995 55 55 55 55</span>
                </div>
              </div>

              <div className="socials">
                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedinIn />
                </a>

                <a href="#">
                  <FaTiktok />
                </a>
              </div>

              <h3 className="map-title">Map</h3>

              <div className="map-container">
                <iframe
                  title={`map-${index}`}
                  src={item.map}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}