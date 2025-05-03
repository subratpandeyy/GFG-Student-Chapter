import { Link } from 'react-router-dom';
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.JPG'

const DeveloperCard = () => {
  return (
    <div className="developer-container">
        <div className='dev'>
        <h1>Developed By</h1>
      <div className="developer-profile">
        <img src={d1} alt="Developer 1" className="developer-image" />
        <Link to={`https://www.linkedin.com/in/potnuru-vamsi-krishna-6520202b1/`}><span className="developer-name">Potnuru Vamsi Krishna</span></Link>
      </div>
      <div className="developer-profile">
        <img src={d2} alt="Developer 2" className="developer-image" />
        <Link to={`https://www.linkedin.com/in/contact-subrat-pandey/`}><span className="developer-name">Subrat Pandey</span></Link>
      </div>
    </div>
    </div>
  );
};

export default DeveloperCard;
