import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const GoalSetting = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("goals") || "[]");
    setGoals(storedGoals);
  }, []);

  const initialValues = {
    goalType: "",
    targetValue: "",
    deadline: "",
  };

  const validationSchema = Yup.object({
    goalType: Yup.string().required("Goal type is required"),
    targetValue: Yup.number()
      .positive("Target value must be positive")
      .required("Target value is required"),
    deadline: Yup.date()
      .min(new Date(), "Deadline must be in the future")
      .required("Deadline is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newGoals = [...goals, values];
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
    resetForm();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Set Your Fitness Goals</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4 mb-8">
          <div>
            <label
              htmlFor="goalType"
              className="block text-sm font-medium text-gray-700"
            >
              Goal Type
            </label>
            <Field
              name="goalType"
              as="select"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="">Select a goal type</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Endurance">Endurance</option>
              <option value="Flexibility">Flexibility</option>
            </Field>
            <ErrorMessage
              name="goalType"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="targetValue"
              className="block text-sm font-medium text-gray-700"
            >
              Target Value
            </label>
            <Field
              name="targetValue"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <ErrorMessage
              name="targetValue"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <Field
              name="deadline"
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <ErrorMessage
              name="deadline"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Set Goal
          </button>
        </Form>
      </Formik>

      <h3 className="text-xl font-semibold mb-2">Your Current Goals</h3>
      {goals.length === 0 ? (
        <p className="text-gray-600">
          No goals set yet. Start by setting your first goal!
        </p>
      ) : (
        <ul className="space-y-2">
          {goals.map((goal, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded-md">
              <strong>{goal.goalType}:</strong> {goal.targetValue} by{" "}
              {new Date(goal.deadline).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalSetting;
