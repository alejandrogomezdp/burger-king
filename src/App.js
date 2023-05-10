import "./App.css";
import "./components/Cards/CardsInfo"
import "./components/Cards/CardsContainer"
import "./components/Cards/CardsImg"
import "./components/Cards/CardsWrapper"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCircleCheck, faDollar, faEnvelope, faPhoneFlip, faStar } from '@fortawesome/free-solid-svg-icons'

// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import CardsInfo from "./components/Cards/CardsInfo";
// import Title from "./components/HeaderTitle";
// import Paragraph from "./components/FillerParagraph";

const App = (props) => {
  return (
    <div className="info-container">
        <h3>{props.title} {props.last_name}</h3>
        <p>{props.role}</p>
        <div className='hire'>
            <div>Rate: <span className='price'>${props.fee}/hr</span></div>
            <button className='hire-button'>Hire Me</button>
        </div>
      <div className='rating'>
      <div className="faStar2">
      <div>5.0</div>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
     </div>
     <div>({props.reviews} reviews)</div>
            </div>
            <div className='icons'>
                <div className='verified'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>
                        Verified
                    </span>
                </div>
                <span className="circle available">
                    <FontAwesomeIcon icon={faDollar} />
                </span>
                <span className="circle available">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="circle not-available">
                    <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <span className="circle not-available">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                </span>
            </div>
        </div>
    );
}

export default App;
