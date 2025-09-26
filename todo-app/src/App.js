// import React, { useState } from "react";
// import { Container, Typography, Box } from "@mui/material";
// import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";

// function App() {
//   const [tasks, setTasks] = useState([]);

  
//   const addTask = (task) => {
//     if (task.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), text: task }]);
//   };


//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

  
//   const editTask = (id, newText) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, text: newText } : task
//       )
//     );
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ textAlign: "center", mt: 5 }}>
//         <Typography variant="h4" gutterBottom>
//           ✅ My Todo App
//         </Typography>

//         <TodoInput addTask={addTask} />
//         <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
//       </Box>
//     </Container>
//   );
// }

// export default App;
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './componentsForMUI/Home'
// import About from './componentsForMUI/About'
// import Contact from './componentsForMUI/Contact'
// const App = () => {
//   return (
//   <>
//   <Router>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//   </Router>
//   </>
//   )
// }

// export default App
// App.js
import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Paper,
} from "@mui/material";

function App() {
  const [time, setTime] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  // Start / Stop
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  // Reset
  const handleReset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  // Lap
  const handleLap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };

  // Format time as mm:ss:ms
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
          p: 4,
          borderRadius: "20px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
          background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          ⏱️ Stopwatch
        </Typography>

        {/* Time Display */}
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", letterSpacing: "2px", mb: 3 }}
        >
          {formatTime(time)}
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
          <Button
            variant="contained"
            sx={{
              background: isRunning ? "#ff4d4d" : "#4CAF50",
              "&:hover": { background: isRunning ? "#e60000" : "#45a049" },
            }}
            onClick={handleStartStop}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>

          <Button
            variant="contained"
            sx={{ background: "#2196F3", "&:hover": { background: "#1976D2" } }}
            onClick={handleLap}
            disabled={!isRunning}
          >
            Lap
          </Button>

          <Button
            variant="contained"
            sx={{ background: "#9C27B0", "&:hover": { background: "#7B1FA2" } }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>

        {/* Lap List */}
        {laps.length > 0 && (
          <Paper
            elevation={3}
            sx={{
              maxHeight: "200px",
              overflowY: "auto",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: "12px",
              p: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Laps
            </Typography>
            <List>
              {laps.map((lap, index) => (
                <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                  <Typography>
                    Lap {index + 1}: {formatTime(lap)}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </Container>
  );
}

export default App;
