import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import JourneyScreen from './screens/JourneyScreen';
import MentorScreen from './screens/MentorScreen';

function App() {
  return (
    <div className="App">

<Router>
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" exact element={ <HomeScreen/> }/>
            <Route path="/journey" element={<JourneyScreen/>} />
            <Route path="/mentor" element={<MentorScreen/>} />
          </Routes> 
        </div>
        <NavBar />
      </div>
    </Router>
   
    </div>
  );
}

export default App;
