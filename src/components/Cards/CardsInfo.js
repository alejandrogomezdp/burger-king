import "./CardsInfo.css"


const CardsInfo = (props) => {
    return (
        <div className="info-container">
         <h3>{props.title} {props.last_name}</h3>
         <p>{props.role}</p>
         <div className="hire"></div>
            </div>
             );
};

export default CardsInfo;