import './App.scss';
import TicketCard from './components/TicketCard/TicketCard';
import team from "./data/team";


const App = () => {
  console.log(team);
  return (
    <div className="all-teams"  >
      <TicketCard title="Ticket Tracker" teamArr={team} />
    </div>
  );
};

export default App;
