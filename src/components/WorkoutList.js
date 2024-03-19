// WorkoutList.js
import React from 'react';

const WorkoutList = ({workoutList}) => {

    
    return (
        <div>
            <h2>Workout History</h2>
            <ul>
                {workoutList.map((workout) => (
                    <li key={workout._id}>
                        <p>Date: {workout.date}</p>
                        <p>Exercise: {workout.exerciseName}</p>
                        <p>Weight: {workout.weight}</p>
                        <p>Sets: {workout.sets}</p>
                        <p>Reps: {workout.reps}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutList;
