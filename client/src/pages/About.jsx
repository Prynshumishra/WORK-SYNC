import React from "react";
import { FaBullseye, FaEye, FaFlag, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const team = [
    {
      name: "Priya Sharma",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com/in/example",
      email: "mailto:priya@example.com",
    },
    {
      name: "Amit Verma",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      linkedin: "https://linkedin.com/in/example",
      email: "mailto:amit@example.com",
    },
    {
      name: "Sara Khan",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      linkedin: "https://linkedin.com/in/example",
      email: "mailto:sara@example.com",
    },
  ];

  return (
    <div className="about container py-5">
      {/* Hero */}
      <div className="about-hero text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">About Us</h1>
        <p className="lead mb-4">
          Get to know our mission, vision, and the people making it happen.
        </p>
      </div>

      {/* Objective */}
      <div className="about-card-container mb-4">
        <div className="about-card p-4 shadow rounded">
          <div className="about-card-header d-flex align-items-center mb-3">
            <FaFlag className="about-card-icon me-2" />
            <h3 className="about-card-title mb-0">Our Objective</h3>
          </div>
          <p className="about-card-text">
            We aim to revolutionize how businesses interact with technology by providing intuitive,
            scalable, and robust solutions. Our objective is to create applications that not only solve
            problems but also enhance productivity, simplify processes, and deliver exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="about-row row gy-4">
        <div className="about-card-container col-md-6">
          <div className="about-card p-4 shadow rounded h-100">
            <div className="about-card-header d-flex align-items-center mb-3">
              <FaEye className="about-card-icon me-2" />
              <h3 className="about-card-title mb-0">Our Vision</h3>
            </div>
            <p className="about-card-text">
              Our vision is to empower organizations with innovative digital tools that inspire growth
              and encourage creativity. We aim to set new standards in technology by making advanced solutions
              accessible and easy to use for everyone.
            </p>
          </div>
        </div>

        <div className="about-card-container col-md-6">
          <div className="about-card p-4 shadow rounded h-100">
            <div className="about-card-header d-flex align-items-center mb-3">
              <FaBullseye className="about-card-icon me-2" />
              <h3 className="about-card-title mb-0">Our Mission</h3>
            </div>
            <p className="about-card-text">
              Our mission is to deliver high-quality, reliable, and secure digital products that exceed
              client expectations. We are dedicated to long-term partnerships through transparency,
              excellence, and a relentless focus on customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="about-team text-center mt-5">
        <h2 className="about-team-title mb-4">Meet Our Team</h2>
        <div className="row gy-4 justify-content-center">
          {team.map((member, idx) => (
            <div key={idx} className="col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="card shadow h-100 text-center p-3 mb-4" style={{ width: "100%", maxWidth: "320px" }}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top rounded-circle mx-auto mb-3"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="card-text">{member.role}</p>
                  <div className="d-flex justify-content-center gap-4 mb-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark fs-3"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={member.email}
                      className="text-dark fs-3"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                  <a href={member.email}>
                    <button className="btn btn-success btn-lg">Contact Me</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
