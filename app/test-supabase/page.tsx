'use client';

import React from 'react';
import { useState } from "react";
import { supabase } from "../../src/lib/supabaseClient";

interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export default function TestSupabase() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.error("Error fetching tasks:", error);
      return;
    }
    setTasks(data || []);
    console.log(data, error);
  };

  return (
    <div>
      <h1>Supabase Test</h1>
      <button onClick={getTasks}>Get Tasks</button>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong>: {task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}