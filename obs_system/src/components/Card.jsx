import "./Card.css";

const Card = ({ icon, title, info, agno, color }) => {
  const cardStyle = {
    backgroundColor: color,
  };
  return (
    <div className="card" style={cardStyle}>
      {icon}
      <div className="info-section">
        <h4 className="">{title}</h4>
        <p className="card-info">
          {info}
          </p>
        {agno ? "Agno: " + agno : null}
        
      </div>
    </div>
  );
};

export default Card;
