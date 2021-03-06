import './App.css';
import Navbar from './components/functions/Navbar';
import Explorer from './components/class/Explorer';
import AirbnbLayover from './components/class/AirbnbLayover';
import AdventureCards from './components/class/AdventureCards';
import WorlwideAcc from './components/class/WorlwideAcc'
import resumeData from './resumeData';

function App() {
  return (
    <header>
      <Navbar resumeData={resumeData}/>
      <Explorer resumeData={resumeData}/> 
      <AirbnbLayover resumeData={resumeData}/>
      <AdventureCards resumeData={resumeData}/>
      <WorlwideAcc resumeData={resumeData}/>
    </header>

  );
}

export default App;
