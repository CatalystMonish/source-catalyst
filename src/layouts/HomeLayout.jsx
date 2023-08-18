import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import NavBar from "../components/Navbar";
import HomeScreen from "../screens/HomeScreen";
import JourneyScreen from "../screens/JourneyScreen";
import MentorScreen from "../screens/MentorScreen";
import TopBar from "../components/TopBar";
import EventsScreen from "../screens/EventsScreen";

function HomeLayout() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1920px]">
          <Outlet />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default HomeLayout;
