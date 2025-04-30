import { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Switch } from "./components/ui/Switch";
import { motion } from "framer-motion";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    setTasks(savedTasks);
    setHistory(savedHistory);
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [tasks, history, darkMode]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    const taskToRemove = tasks.find((task) => task.id === id);
    setHistory([...history, taskToRemove]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Lista de Taregas</h1>
        <div className="flex gap-2 mb-4">
          <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nova tarefa" />
          <Button onClick={addTask}>Adicionar</Button>
        </div>
        {tasks.map((task) => (
          <Card key={task.id} className="mb-2 bg-gray-600">
            <CardContent className="flex justify-between p-3 font-bold">
              <span
                className={task.completed ? "line-through" : ""}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <Button variant="destructive" onClick={() => removeTask(task.id)}>Remover</Button>
            </CardContent>
          </Card>
        ))}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Histórico</h2>
          {history.map((task, index) => (
            <p key={index} className="text-gray-500 text-sm">{task.text}</p>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2">
          <span>Modo Escuro</span>
          <Switch checked={darkMode} onCheckedChange={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </div>
  );
}
