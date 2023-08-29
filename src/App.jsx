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
import ProjectsScreen from "./screens/ProjectsScreen";
import NewPostScreen from "./screens/NewPostScreen";
import VideoPlayer from "./screens/VideoPlayer";
import ProfileScreen from "./screens/ProfileScreen";
import OngoingProjectScreen from "./screens/OngoingProjectScreen";

function App() {
  return (
    <div className="App bg-[#F2F1F7]">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/login" exact element={<LoginScreen />} />
            <Route
              path="/newpost"
              element={
                <Protected>
                  <NewPostScreen />
                </Protected>
              }
            />
            <Route
              path="/ongoing"
              element={
                <Protected>
                  <OngoingProjectScreen />
                </Protected>
              }
            />
            <Route
              path="/player"
              element={
                <Protected>
                  <VideoPlayer />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <ProfileScreen />
                </Protected>
              }
            />

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
                path="/projects"
                element={
                  <Protected>
                    <ProjectsScreen />
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
