// Component to display a single task
function ToDoItem({ task, toggleComplete, deleteTask }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none", // Apply line-through if task is completed
      }}
    >
      {/* Display the task text */}
      {task.text}

      {/* Button to toggle completion status */}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"} {/* Change text based on completion status */}
      </button>

      {/* Button to delete the task */}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;