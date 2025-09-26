import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
    setTask(""); 
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        label="Enter a task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
}

export default TodoInput;