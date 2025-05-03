import React, { useEffect, useState } from "react";
import Lead from "../assets/third/Lead.png";
import SM from "../assets/third/SM.png";
import SD from "../assets/third/SD.png";
import SO from "../assets/third/SO.png";
import PC from "../assets/third/PC.png";
import DB from "../assets/third/DB.png";
import SK from "../assets/third/SK.png";
import PV from "../assets/third/PV.png";

import H from "../assets/sec/H.png";
import B from "../assets/sec/B.png";
import SP from "../assets/sec/SP.png";
import A from "../assets/sec/A.png";
import S from "../assets/sec/S.png";
import E from "../assets/sec/E.png";
import AK from "../assets/sec/AK.png";

const teamMembers = [
  { name: "Amiya Bhanja", role: "Lead", img: Lead },
  { name: "Sameer Kumar Mishra", role: "Vice Chairperson", img: SM },
  { name: "Santu Das", role: "Tech Lead", img: SD },
  { name: "Sonali Pandey", role: "Marketing Lead", img: SO },
  { name: "Priyanshu Choudhary", role: "Event Lead", img: PC },
  { name: "Deepak Behera", role: "Design & Branding Lead", img: DB },
  { name: "Sasi Kiran", role: "Public & Outreach Lead", img: SK },
  { name: "Potnuru Vamsi Krishna", role: "Social Media Lead", img: PV },
  { name: "Harmesh Behera", role: "Co-member (Tech)", img: H },
  { name: "Bibhu Kalyan Nayak", role: "Co-member (Tech)", img: B },
  { name: "Subrat Pandey", role: "Co-member (Tech)", img: SP },
  { name: "Anwesha Jena", role: "Co-member (Designing)", img: A },
  { name: "Snehalata Pattnaik", role: "Co-member (Social Media)", img: S },
  { name: "Eesha Upasya Mishra", role: "Co-member (Marketing)", img: E },
  { name: "Akash Kumary Patnaik", role: "Co-member (Public & Outreach)", img: AK },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalMembers = teamMembers.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalMembers);
    }, 2500); // Slide every 2.5s
    return () => clearInterval(interval);
  }, [totalMembers]);

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="container team-section">
      <div className="team-container">
        <div className="team-header">
          <h1 className="team-title">Our Team</h1>
          <p className="team-description">
            The GIETU team of GFG Student Chapter comprises students interested in coding and technology. 
            They organize and conduct events such as coding challenges, workshops, 
            and study sessions to enable others to learn. Each of them plays different roles, 
            like event organizing, material designing, or assisting in communication. 
            They collaborate as a team to enable learning about programming for everyone on campus.
          </p>
        </div>

        <div className="team-carousel">
          <div className="team-member">
            <div className="team-card fade-slide">
              <img
                alt={currentMember.name}
                className="team-avatar"
                src={currentMember.img}
              />
              <div className="team-info">
                <h2 className="team-name">{currentMember.name}</h2>
                <p className="team-role">{currentMember.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
