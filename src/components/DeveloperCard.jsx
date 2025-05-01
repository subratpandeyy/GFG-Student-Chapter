import SP from '../assets/sec/Sp.png'
import PV from '../assets/third/PV.png'

const DeveloperCard = () => {
  return (
    <div className="developer-container">
        <div className='dev'>
        <h1>Developed By</h1>
      <div className="developer-profile">
        <img src={PV} alt="Developer 1" className="developer-image" />
        <span className="developer-name">Potnuru Vamsi Krishna</span>
      </div>
      <div className="developer-profile">
        <img src={SP} alt="Developer 2" className="developer-image" />
        <span className="developer-name">Subrat Pandey</span>
      </div>
    </div>
    </div>
  );
};

export default DeveloperCard;
