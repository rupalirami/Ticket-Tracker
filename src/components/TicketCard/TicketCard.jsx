import Counter from "../Counter/Counter";
import "./TicketCard.scss"
// import Button from "../Button/Button";

const TicketCard= (props) => {

  const  teamJSX = props.teamArr.map(team => 
    <div className="card-details">
       <div className="card-details__name">{team.name}</div>
       <div className="card-details__role">{team.role}</div>  
       <div className="counter" key={team.id}> 
          <h4 className="counter__heading">Counter</h4>
          <Counter />
       </div>
    </div>
  );

  return (
    <div className="ticket"> 
      <h1>{props.title}</h1>
      <div className="ticket-card">{teamJSX}</div>
    </div>
  )
}

export default TicketCard