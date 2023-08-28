import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import JourneyScreen from "./screens/JourneyScreen";
import MentorScreen from "./screens/MentorScreen";
import EventsScreen from "./screens/EventsScreen";
import PremiumSellCard from "./components/PremiumSellCard";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App bg-[#F2F1F7]">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/login" exact element={<LoginScreen />} />
            <Route element={<HomeLayout />}>
              <Route path="/" element={<HomeLayout />}>
                <Route index element={<HomeScreen />} />
                <Route path="/journey" element={<JourneyScreen />} />
                <Route path="/mentor" element={<MentorScreen />} />
                <Route path="/events" element={<EventsScreen />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
