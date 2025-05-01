import id1 from '../assets/id1.png';
import id2 from '../assets/id2.png';
import id3 from '../assets/id3.png';

const ideas = [
  {
    title: "Providing Technical Exposure",
    desc: "We believe that providing exposure to the students would help them to know new tech related innovations and help them to meet new tech enthusiast that would benefit them by gaining knowledge.",
    image: id1,
    alt: "Tech",
  },
  {
    title: "Sharing knowledge",
    desc: "In the GFG Students chapter our primary goal is to impart knowledge and build a large network of passionate developers, programmers, coders and learners in the field of computer science and we aim to achieve the same by providing a platform to students to learn, build and enhance their skills.",
    image: id2,
    alt: "Tech",
  },
  {
    title: "Students Overall Development",
    desc: "We aim to help students develop fine coding skills and reach the best of their potential. Grow students’ knowledge in the field in a peer-peer learning environment. Facilitate guidance and resources for internships, placement, and competitive exam preparation.",
    image: id3,
    alt: "Tech",
  },
];


const IdeologySection = () => {
  return (
    <section className="container ideology-section">
      <h1 className="ideology-title">Our Ideologies</h1>
      <div className="ideology-content">
        <div className="ideology-text">
          <h3 className="ideology-subtitle">Providing Technical Exposure</h3>
          <p className="ideology-paragraph">
            We believe that providing exposure to the students would help them
            to know new tech related innovations and help them to meet new tech
            enthusiast that would benefit them by gaining knowledge.
          </p>
        </div>
        <div className="ideology-image">
          <img
            src={id1}
            alt="Technical Image"
          />
        </div>
      </div>
      <div className="ideology-content">
          <div className="ideology-image">
          <img
            src={id2}
            alt="Technical Image"
          />
        </div>
        <div className="ideology-text">
        <h3 className="ideology-subtitle">Sharing knowledge</h3>
          <p className="ideology-paragraph">
          In the GFG Students chapter our primary goal is to impart knowledge and build a 
          large network of passionate developers, programmers, coders and learners in the field of computer science and we aim to
          achieve the same by providing a platform to students to learn, build and enhance their skills.
          </p>
        </div>
        
      </div>

      <div className="ideology-content">
        <div className="ideology-text">
          <h3 className="ideology-subtitle">Students Overall Development</h3>
          <p className="ideology-paragraph">
          We aim to help students develop fine coding skills and reach the best of their potential. 
          Grow students’ knowledge in the field in a peer-peer learning environment. 
          Facilitate guidance and resources for internships, placement, and competitive exam preparation.
          </p>
        </div>
        <div className="ideology-image">
          <img
            src={id3}
            alt="Technical Image"
          />
        </div>
      </div>
    </section>
  );
};

export default IdeologySection;
