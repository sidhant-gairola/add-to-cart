import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const member = {
    name: "Sidhant Gairola",
    role: "Full Stack Developer",
    email: "ssid7074@gmail.com",
    linkedin: "https://linkedin.com/in/sidhant-gairola",
    image: "/imgSidhant.jpeg", // From public folder
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "450px", margin: "2rem auto", marginBottom: "7rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>About Us</h1>
      <div style={{ border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
        <img
          src={member.image}
          alt={member.name}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <div style={{ padding: "1rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{member.name}</h2>
          <p style={{ marginBottom: "1rem", color: "#555" }}>{member.role}</p>
          <div>
            <a
              href={`mailto:${member.email}`}
              style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem", color: "blue", textDecoration: "none" }}
            >
              <CgMail style={{ marginRight: "0.5rem" }} />
              {member.email}
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", color: "blue", textDecoration: "none" }}
            >
              <FaLinkedin style={{ marginRight: "0.5rem" }} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
