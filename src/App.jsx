import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import WorkScreen from "./screens/WorkScreen";
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
import CompleteProfile from "./screens/CompleteProfile";
import ChatScreen from "./screens/ChatScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import ConnectScreen from "./screens/ConnectScreen";
import Chat from "./screens/Chat";

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
              path="/project-details/:id"
              element={
                <Protected>
                  <ProjectDetailsScreen />
                </Protected>
              }
            />
            <Route
              path="/chats"
              element={
                <Protected>
                  <ChatScreen />
                </Protected>
              }
            />
             <Route
              path="/chat/:receiverId"
              element={
                <Protected>
                  <Chat />
                </Protected>
              }
            />
            <Route
              path="/complete_profile"
              element={
                <Protected>
                  <CompleteProfile />
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
                path="/work"
                element={
                  <Protected>
                    <WorkScreen />
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

              <Route
                path="/connect"
                element={
                  <Protected>
                    <ConnectScreen />
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
