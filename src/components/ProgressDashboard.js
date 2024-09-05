import React, { useState, useEffect } from "react";

const ProgressDashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
    setWorkouts(storedWorkouts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
      {workouts.length === 0 ? (
        <p className="text-gray-600">
          No workouts logged yet. Start by logging your first workout!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Exercise Type</th>
                <th className="px-4 py-2">Duration (min)</th>
                <th className="px-4 py-2">Calories Burned</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">
                    {new Date(workout.date).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{workout.exerciseType}</td>
                  <td className="border px-4 py-2">{workout.duration}</td>
                  <td className="border px-4 py-2">{workout.caloriesBurned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProgressDashboard;
