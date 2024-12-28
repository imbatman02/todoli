import { useState, useEffect } from "react";

function App() {
  const text = localStorage.getItem("list") || "[]";
  const [Task, setTask] = useState("");
  const [ListOfTasks, setListOfTasks] = useState(JSON.parse(text));

  const ManageTask = () => {
    if (Task.trim() !== "") {
      const updatedTasks = [...ListOfTasks, Task];
      setListOfTasks(updatedTasks);
      localStorage.setItem("list", JSON.stringify(updatedTasks)); 
      setTask(""); 
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = ListOfTasks.filter((_, i) => i !== index);
    setListOfTasks(updatedTasks);
    localStorage.setItem("list", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="w-full mt-20 text-center h-full p-5 border-b-[1px] border-white">
        <p className="font-title text-white text-5xl">TO-DO NOW</p>
        <div className="relative mt-10 w-full mx-auto">
          <input
            type="text"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
            className="w-11/12 h-10 px-4 rounded-xl bg-inputbg"
            placeholder="Enter a task"
          />
          <button
            onClick={ManageTask}
            className="absolute right-[10px] bg-buttonbg text-white px-4 h-10 rounded-xl"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="mt-20 flex-1">
        {ListOfTasks.length > 0 ? (
          ListOfTasks.map((task, index) => (
            <Todo
              key={index}
              nameOfTask={task}
              Delete={() => deleteTask(index)} //
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
}

const Todo = ({ nameOfTask, Delete }) => {
  return (
    <div className="mt-3 w-full bg-inputbg rounded-l flex justify-between pl-3">
      <p className="py-2">{nameOfTask}</p>
      <button
        className="w-10 bg-red-500 font-bold text-2xl rounded-l focus:outline-none"
        onClick={Delete}
      >
        X
      </button>
    </div>
  );
};

export default App;
