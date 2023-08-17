import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import JourneyScreen from './screens/JourneyScreen';
import MentorScreen from './screens/MentorScreen';
import TopBar from "./components/TopBar";
import { motion, AnimatePresence } from 'framer-motion';
import EventsScreen from "./screens/EventsScreen";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function App() {
  return (
    <div className="App bg-[#F2F1F7]">

<Router>
      <div className="flex flex-col ">
        <div className="">
        <TopBar/>
        </div>
        <div className="flex items-center flex-col">
        <div className="max-w-[1920px] w-full">
        <AnimatePresence>
          <Routes>
            <Route path="/" exact element={ <HomeScreen/> }/>
            <Route path="/journey" element={<JourneyScreen/>} />
            <Route path="/mentor" element={<MentorScreen/>} />
            <Route path="/events" element={<EventsScreen/>} />
          </Routes> 
          </AnimatePresence>
          </div>
        </div>
        <NavBar/>
      </div>
    </Router>
   
    </div>
  );
}

export default App;
