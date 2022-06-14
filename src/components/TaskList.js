import React from "react";
import Task from "./Task"

function TaskList({ tasks, getTask }) {

  return (
    <div className="tasks">
      {tasks.map(task => <Task text={task.text} category={task.category} key={task.text} getNewTask={getTask} />)}
    </div>
  );
}

export default TaskList;
