import {
  FaLinkedinIn,
  FaEnvelope,
  FaTools,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="pt-4 mt-auto text-light">
      <div className="footer-bg">
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-md-4 mb-4">
              <h2 className="h4">
                <span className="fw-bold">WORK</span> <br />
                <span className="text-warning">SYNC</span>
              </h2>
              <p className="text-white">
                Simple interface and powerful features for your business growth.
              </p>
            </div>

            {/* Helpful Links */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold text-white">HELPFUL LINKS</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a
                    href="/privacy"
                    className="text-white text-decoration-none helpful-link"
                  >
                    &rsaquo; Privacy Policy
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="/refund"
                    className="text-white text-decoration-none helpful-link"
                  >
                    &rsaquo; Refund Policy
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="/terms"
                    className="text-white text-decoration-none helpful-link"
                  >
                    &rsaquo; Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold text-white">GET IN TOUCH</h5>
              <ul className="list-unstyled text-white">
                <li className="my-2 contact-item">
                  <FaEnvelope className="me-2" /> project@worksync.com
                </li>
                <li className="my-2 contact-item">
                  <FaEnvelope className="me-2" /> sync@worksync.com
                </li>
                <li className="my-2 contact-item">
                  <FaEnvelope className="me-2" /> work@worksync.com
                </li>
                <li className="my-2 contact-item">
                  <FaTools className="me-2" /> Support Team: 10am–6pm
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-light" />

          {/* Social Icons */}
          <div className="d-flex justify-content-center mb-3">
            <a
              href="https://github.com/Prynshumishra"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 fs-5 social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="http://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 fs-5 social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 fs-5 social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:prynshu09@gmail.com?subject=Inquiry%20from%20Website&body=Hi%20Priyanshu,%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%0D%0A%0D%0AThank%20you!"
              className="mx-2 fs-5 social-icon"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-center small text-white mb-0">
            © {new Date().getFullYear()} WORK SYNC PVT. LTD. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Footer background & icon styles */}
      <style jsx="true">{`
  .footer-bg {
    background-color: #282c34;
    border-top: 4px solid #080f1e;
    color: #fff;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  .social-icon {
    color: #fff;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .social-icon:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
  .helpful-link {
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }
  .helpful-link:hover {
    color: #ffc107;       /* Bright yellow on hover */
    text-decoration: underline;  /* Underline for clear feedback */
  }
  .contact-item:hover {
    color: #ffc107;
    transform: translateX(5px);
    transition: color 0.3s ease, transform 0.3s ease;
  }
`}</style>

    </footer>
  );
}
