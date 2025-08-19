import React, { useState } from 'react';
function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        //use updater function for every new task [...tasks,newTask]
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a task'
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className='add-button'
                    onClick={addTask}>Add
                </button>
            </div>
            <ol>
                {tasks.map((tasks, index) =>
                    <li key={index}>
                        <span
                            className='text'>{tasks}
                        </span>
                        <button
                            className='delete-button'
                            onClick={() =>
                                deleteTask(index)}>Delete
                        </button>
                        <button
                            className='move-button-up'
                            onClick={() =>
                                moveTaskUp(index)}>Up
                        </button>
                        <button
                            className='move-button-down'
                            onClick={() =>
                                moveTaskDown(index)}>Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}
export default ToDoList;