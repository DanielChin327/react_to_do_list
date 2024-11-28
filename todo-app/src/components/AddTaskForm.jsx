import { useState } from "react"; // Import useState for managing local state

// Component to add a new task
function AddTaskForm({ addTask }) {
  // State to track the value of the input field
  const [taskText, setTaskText] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    if (taskText.trim()) {
      addTask(taskText); // Call the addTask function passed from App.jsx
      setTaskText(""); // Clear the input field after adding the task
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering a task */}
      <input
        type="text"
        placeholder="Add a new task" // Placeholder text for guidance
        value={taskText} // Bind input value to the taskText state
        onChange={(e) => setTaskText(e.target.value)} // Update state when the user types
      />
      {/* Button to submit the form */}
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;