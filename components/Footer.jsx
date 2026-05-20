import logo from "../src/assets/logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
  <footer className="footer">
   
    <div className="footer-logo">
      <img src={logo} alt="logo" />
    </div>

   
    <div className="footer-time-cnt">
      <div className="footer-time">
        <p className="head">
          Head Office, Street Name #13 <br />
          Tbilisi, Georgia
        </p>

        <p className="time">10:00 - 18:00</p>
      </div>

      <div className="footer-time">
        <p className="head">
          Head Office, Street Name #13 <br />
          Tbilisi, Georgia
        </p>

        <p className="time">10:00 - 18:00</p>
      </div>

      <div className="footer-time">
        <p className="head">
          Head Office, Street Name #13 <br />
          Tbilisi, Georgia
        </p>

        <p className="time">10:00 - 18:00</p>
      </div>
    </div>

    
    <div className="social-links-container">
      
      <div className="circle-link-phone">
        <div className="circle-link">
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.31767 6.34403C9.0754 6.2281 7.89023 5.65488 7.6676 5.57759C7.44497 5.49387 7.28782 5.46166 7.12412 5.69353C6.96042 5.93183 6.49552 6.45996 6.35802 6.61454C6.21396 6.77555 6.07646 6.78843 5.83418 6.6725C5.59191 6.55657 4.81926 6.31183 3.896 5.50031C3.18228 4.88201 2.69119 4.10913 2.55368 3.87082C2.41618 3.63252 2.54059 3.51015 2.65845 3.38778C2.76976 3.27829 2.90072 3.11083 3.02513 2.97558C3.16264 2.77592 3.20847 2.69219 3.26086 2.57626C3.34598 2.41524 3.30014 2.27999 3.24121 2.16405C3.18228 2.04812 2.69774 0.888808 2.49475 0.412201C2.29832 -0.0579655 2.09533 0.0193217 1.95128 0.0193217C1.80722 0.0193217 1.65007 0 1.49292 0C1.33577 0 1.06731 0.0579658 0.84468 0.296269C0.622051 0.534573 0 1.10135 0 2.26066C0 3.06574 0.366683 3.89659 0.988734 4.69523C1.1066 4.8498 2.65845 7.30368 5.10737 8.25046C7.56283 9.19079 8.00809 8.83656 8.45335 8.79791C9.43553 8.26978 9.63197 7.71589 9.77602 6.59521C9.71709 6.49861 9.55339 6.44064 9.31767 6.32471V6.34403Z"
              fill="#2E4790"
            />
          </svg>
        </div>

        <p className="number">+995 591 12 30 33</p>
      </div>

      
      <div className="circle-link-phone">
        <div className="circle-link whatsapp">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.31422 0C3.00536 0 0.372846 2.56366 0.231095 5.77532C0.227045 5.95352 0.227045 6.03857 0.227045 6.03857C0.227045 7.18068 0.546996 8.24583 1.0978 9.16114L0.000244141 12.4012L3.36986 11.3279C4.24061 11.8058 5.24502 12.0812 6.31017 12.0812C9.67169 12.0812 12.3973 9.37579 12.3973 6.03857C12.3973 2.70136 9.67169 0 6.31422 0Z"
              fill="white"
            />
          </svg>
        </div>

        <p className="number">+995 591 12 30 33</p>
      </div>


      <div className="circle-link-phone">
        <div className="circle-link">
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.97815 8.12446C9.64162 7.85448 9.28227 7.61111 8.92863 7.36204C8.22324 6.8658 7.5787 6.82777 7.05204 7.62442C6.75734 8.07123 6.34285 8.09214 5.90936 7.89441C4.71724 7.35444 3.79511 6.51976 3.25704 5.30863C3.01938 4.77247 3.02128 4.29144 3.58026 3.91308C3.87496 3.71344 4.17347 3.47578 4.15065 3.03658C4.12023 2.46428 2.73228 0.555374 2.1847 0.353836C1.95845 0.270178 1.73219 0.275882 1.50214 0.353836C0.216854 0.787333 -0.315511 1.84256 0.194039 3.09552C1.71508 6.82777 4.39022 9.42686 8.07304 11.0144C8.28409 11.1038 8.51605 11.1399 8.63393 11.1723C9.4724 11.1799 10.4554 10.3718 10.7387 9.57136C11.0125 8.79943 10.4345 8.49332 9.97815 8.12637V8.12446Z"
              fill="white"
            />
          </svg>
        </div>

        <p className="number">+995 591 12 30 33</p>
      </div>
    </div>
  </footer>
</div>
  );
}
