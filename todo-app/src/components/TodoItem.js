import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Box
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        <Box>
          {isEditing ? (
            <IconButton edge="end" onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton edge="end" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton edge="end" onClick={() => deleteTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          size="small"
          sx={{ width: "70%" }}
        />
      ) : (
        <ListItemText primary={task.text} />
      )}
    </ListItem>
  );
}

export default TodoItem;