import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkoutLogger from "./components/WorkoutLogger";
import ProgressDashboard from "./components/ProgressDashboard";
import GoalSetting from "./components/GoalSetting";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/log-workout" className="hover:text-blue-200">
                Log Workout
              </Link>
            </li>
            <li>
              <Link to="/progress" className="hover:text-blue-200">
                Progress
              </Link>
            </li>
            <li>
              <Link to="/goals" className="hover:text-blue-200">
                Goals
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold mb-4">
                  Welcome to Fitness Tracker
                </h1>
              }
            />
            <Route path="/log-workout" element={<WorkoutLogger />} />
            <Route path="/progress" element={<ProgressDashboard />} />
            <Route path="/goals" element={<GoalSetting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
