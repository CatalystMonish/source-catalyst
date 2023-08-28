import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import JourneyScreen from "./screens/JourneyScreen";
import MentorScreen from "./screens/MentorScreen";
import EventsScreen from "./screens/EventsScreen";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

function App() {
  return (
    <div className="App bg-[#F2F1F7]">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/login" exact element={<LoginScreen />} />

            <Route element={<HomeLayout />}>
              <Route
                path="/"
                element={
                  <Protected>
                    <HomeLayout />
                  </Protected>
                }
              />
              <Route
                index
                element={
                  <Protected>
                    <HomeScreen />
                  </Protected>
                }
              />
              <Route
                path="/journey"
                element={
                  <Protected>
                    <JourneyScreen />
                  </Protected>
                }
              />
              <Route
                path="/mentor"
                element={
                  <Protected>
                    <MentorScreen />
                  </Protected>
                }
              />
              <Route
                path="/events"
                element={
                  <Protected>
                    <EventsScreen />
                  </Protected>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
