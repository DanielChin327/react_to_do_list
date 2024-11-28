import ToDoItem from "./ToDoItem"; // Importing the ToDoItem component

// Component to display the list of tasks
function ToDoList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {/* Loop through the tasks array and render a ToDoItem for each task */}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id} // Unique key for each list item
          task={task} // Pass the task data to the ToDoItem component
          toggleComplete={toggleComplete} // Pass the toggleComplete function
          deleteTask={deleteTask} // Pass the deleteTask function
        />
      ))}
    </ul>
  );
}

export default ToDoList;