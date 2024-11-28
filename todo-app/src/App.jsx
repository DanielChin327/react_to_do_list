import { useState } from "react";
import ToDoList from "./components/ToDoList"; // Importing the ToDoList component
import AddTaskForm from "./components/AddTaskForm"; // Importing the AddTaskForm component

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskText) => {
    // Create a new task object with a unique ID and default completed status
    const newTask = { id: Date.now(), text: taskText, completed: false };
    // Add the new task to the current list of tasks
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completed status of a task
  const toggleComplete = (taskId) => {
    // Map through the tasks and update the 'completed' status of the matching task
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task by its ID
  const deleteTask = (taskId) => {
    // Filter out the task that matches the ID
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {/* Form to add a new task */}
      <AddTaskForm addTask={addTask} />
      {/* Display the list of tasks */}
      <ToDoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;