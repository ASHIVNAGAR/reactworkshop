import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, editTask }) {
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </List>
  );
}

export default TodoList;