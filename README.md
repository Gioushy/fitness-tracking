# Fitness Tracking Application

## Overview

The Fitness Tracking Application is a React-based web application that allows users to track their workouts, monitor progress, and set fitness goals. This project focuses on core fitness tracking functionalities, including form handling, dynamic routing, comprehensive styling, and data persistence.

## Features

- **Workout Logging**: Users can log their workouts, including exercise type, duration, and calories burned.
- **Progress Dashboard**: Displays a history of logged workouts.
- **Goal Setting**: Allows users to set and track fitness goals.
- **Responsive Design**: The application is fully responsive and works well on desktop and mobile devices.
- **Data Persistence**: Workout logs and fitness goals are saved in local storage for offline access.

## Technologies Used

- React
- React Router for navigation
- Formik and Yup for form handling and validation
- Tailwind CSS for styling
- Local Storage API for data persistence

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/fitness-tracker.git
   cd fitness-tracker
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

1. **Logging a Workout**:

   - Navigate to the "Log Workout" page.
   - Fill in the exercise type, duration, and calories burned.
   - Submit the form to log your workout.

2. **Viewing Progress**:

   - Go to the "Progress" page to see a table of all logged workouts.

3. **Setting Goals**:
   - Visit the "Goals" page.
   - Set a new goal by specifying the goal type, target value, and deadline.
   - View your current goals on the same page.

## Project Structure

```
fitness-tracker/
├── src/
│   ├── components/
│   │   ├── WorkoutLogger.js
│   │   ├── ProgressDashboard.js
│   │   └── GoalSetting.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
