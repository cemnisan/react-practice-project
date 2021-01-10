import './App.css';
import Navbar from './components/functions/Navbar';
import Explorer from './components/class/Explorer';
import AirbnbLayover from './components/class/AirbnbLayover'
import resumeData from './resumeData';

function App() {
  return (
    <header>
      <Navbar resumeData={resumeData}/>
      <Explorer resumeData={resumeData}/> 
      <AirbnbLayover  resumeData={resumeData}/>
    </header>
  );
}

export default App;
