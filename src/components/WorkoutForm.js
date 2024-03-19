import React, { useState } from 'react';
import WorkoutList from './WorkoutList';
import  '../App.css'


export default function WorkoutForm () {
    const [workout, setWorkout] = useState({
        date: '',
        exerciseName: '',
        weight: '',
        sets: '',
        reps: ''
    });

const [workoutList, setWorkoutList] = useState([])

    const handleChange = (e) => {
      setWorkout({ ...workout, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkoutList([...workoutList, workout]);
       
            //reset the form fields after successful submission
            setWorkout({
                date: '',
                exerciseName: '',
                weight: '',
                sets: '',
                reps: ''
            });
    };




    return (

        <div className='container'>
            <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date</label><input type="date" name="date" value={workout.date} onChange={handleChange} />
                </div>

                <div>
                    <label>Excercise</label><input type="text" name="exerciseName" value={workout.exerciseName} onChange={handleChange} placeholder="Exercise Name" />
                </div>

                <div>
                    <label>Weight</label> <input type="number" name="weight" value={workout.weight} onChange={handleChange} placeholder="Weight" />
                </div>

                <div>
                    <label>Sets</label><input type="number" name="sets" value={workout.sets} onChange={handleChange} placeholder="Sets" />
                </div>

                <div>
                    <label>Reps</label><input type="number" name="reps" value={workout.reps} onChange={handleChange} placeholder="Reps" />
                </div>
                
                <button type="submit">Submit</button>
            </form>
            </div>
   
            <div className='workout-history'>
                <WorkoutList workoutList={workoutList}/>
            </div>
        </div>
        
        
        
    );
}

