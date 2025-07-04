import React from "react";
const Contact = () => {
  return (
    
    <div className="contact-page py-5" >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-4">
            Reach out to us with any questions, feedback, or collaboration opportunities. We’re always happy to hear from you!
          </p>
        </div>

        
        <div className="contact-card row shadow rounded overflow-hidden mx-auto mb-5">
          
          <div className="col-lg-6 p-0">
            <img
              src="https://images.unsplash.com/photo-1496814795703-e5b242546673?w=800&auto=format&fit=crop&q=60"
              alt="Contact"
              className="w-100 h-100 object-fit-cover"
              style={{ minHeight: "400px" }}
            />
          </div>

          
          <div className="col-lg-6 p-4 d-flex flex-column justify-content-center bg-white  ">
            <div className="contact-info mb-4 fw-bold align-items-center text-center">
              <h2 className="mb-3">Our Office</h2>
              <p>📍 Praygraj, Uttar Pradesh, India</p>
              <p>📞 +(91) 829-952-5726</p>
              <p>
                📧 <a href="mailto:contact@gmail.com">year22to26@example.com</a>
              </p>
            </div>

            <form className="contact-form align-items-center text-center" >
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label fw-bold ">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your Email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-bold">Phone No</label>
                <input type="tel" id="phone" className="form-control" placeholder="Your Phone Number" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea id="message" rows="4" className="form-control" placeholder="Your Message" required></textarea>
              </div>

              <button type="submit" className="btn btn-success btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>

        
        <div className="contact-map-full rounded shadow overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.4054633556334!2d83.43054731063489!3d26.731434267761102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMMM%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1751448575682!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            
            referrerPolicy="no-referrer-when-downgrade"
            title="MMM University of Technology Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
