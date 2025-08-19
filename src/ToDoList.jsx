// Import React and useState hook
import React, { useState } from 'react';

// Define the ToDoList functional component
function ToDoList() {

    // State to store the list of tasks
    const [tasks, setTasks] = useState([]);

    // State to track the value of the input field
    const [newTask, setNewTask] = useState('');

    // Function to handle changes in the input field
    function handleInputChange(event) {
        // Update the newTask state with the value typed by the user
        setNewTask(event.target.value);
    }

    // Function to add a new task to the list
    function addTask() {
        // Add task only if it's not empty after trimming whitespace
        if (newTask.trim() !== "") {
            // Use the spread operator to create a new array with the old tasks and the new task
            setTasks(t => [...t, newTask]);

            // Clear the input field after adding the task
            setNewTask("");
        }
    }

    // Function to delete a task at a specific index
    function deleteTask(index) {
        // Filter out the task that matches the given index
        const updatedTasks = tasks.filter((element, i) => i !== index);

        // Update the tasks state with the filtered list
        setTasks(updatedTasks);
    }

    // Function to move a task one position up
    function moveTaskUp(index) {
        // Only move if it's not the first task
        if (index > 0) {
            // Copy the tasks array
            const updatedTasks = [...tasks];

            // Swap the current task with the one above it
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];

            // Update the state with the new task order
            setTasks(updatedTasks);
        }
    }

    // Function to move a task one position down
    function moveTaskDown(index) {
        // Only move if it's not the last task
        if (index < tasks.length - 1) {
            // Copy the tasks array
            const updatedTasks = [...tasks];

            // Swap the current task with the one below it
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];

            // Update the state with the new task order
            setTasks(updatedTasks);
        }
    }

    // JSX returned by the component
    return (
        <div className='to-do-list'>
            {/* Heading for the To-Do List */}
            <h1>To Do List</h1>

            <div>
                {/* Input field for entering a new task */}
                <input
                    type="text"
                    placeholder='Enter a task'
                    value={newTask}                  // Binds the input to newTask state
                    onChange={handleInputChange}    // Calls handleInputChange on typing
                />

                {/* Button to add the task */}
                <button
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>

            {/* Ordered list to display tasks */}
            <ol>
                {/* Loop through the tasks array and render each task */}
                {tasks.map((task, index) => (
                    <li key={index}>
                        {/* Display task text */}
                        <span className='text'>{task}</span>

                        {/* Button to delete the task */}
                        <button
                            className='delete-button'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        {/* Button to move the task up */}
                        <button
                            className='move-button-up'
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>

                        {/* Button to move the task down */}
                        <button
                            className='move-button-down'
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

// Export the ToDoList component so it can be used in other files
export default ToDoList;
