import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const WorkoutLogger = () => {
  const initialValues = {
    exerciseType: "",
    duration: "",
    caloriesBurned: "",
  };

  const validationSchema = Yup.object({
    exerciseType: Yup.string().required("Exercise type is required"),
    duration: Yup.number()
      .positive("Duration must be positive")
      .required("Duration is required"),
    caloriesBurned: Yup.number()
      .positive("Calories must be positive")
      .required("Calories burned is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Save workout to local storage
    const workouts = JSON.parse(localStorage.getItem("workouts") || "[]");
    workouts.push({ ...values, date: new Date().toISOString() });
    localStorage.setItem("workouts", JSON.stringify(workouts));

    console.log("Workout logged:", values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Log Your Workout</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="exerciseType"
              className="block text-sm font-medium text-gray-700"
            >
              Exercise Type
            </label>
            <Field
              name="exerciseType"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <ErrorMessage
              name="exerciseType"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Duration (minutes)
            </label>
            <Field
              name="duration"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <ErrorMessage
              name="duration"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="caloriesBurned"
              className="block text-sm font-medium text-gray-700"
            >
              Calories Burned
            </label>
            <Field
              name="caloriesBurned"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <ErrorMessage
              name="caloriesBurned"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log Workout
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default WorkoutLogger;
